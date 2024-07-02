document.addEventListener('DOMContentLoaded', (event) => {

    let scene, camera, renderer, raycaster, mouse;
    let particles, redParticles, greenParticles, blueParticles, blackHole;
    let clock = new THREE.Clock();
    let isGlitching = false;

    const params = {
        particleCount: 5000,
        particleSize: 0.3,
        gravitationalStrength: 0.1,
        cameraDistance: 80,
        cameraRotationSpeed: 0.05,
        aberrationStrength: 0.28,
        maxAberrationDistance: 50,
        glitchInterval: [4, 15],
        glitchDuration: [0.4, 1.5],
        blackHoleRadius: 5,
        blackHoleStrength: 1.5,
        blackHoleSpeed: 0.5,
        blackHoleInterval: 20,
    };

    function init() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = params.cameraDistance;

        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000);
        //document.body.appendChild(renderer.domElement);
        document.querySelector('.hero').appendChild(renderer.domElement);

        raycaster = new THREE.Raycaster();
        mouse = new THREE.Vector2();

        createParticles();
        createBlackHole();

        window.addEventListener('resize', onWindowResize, false);
        window.addEventListener('mousemove', onMouseMove, false);

        startGlitchCycle();
        startBlackHoleCycle();
        launchBlackHole()
    }

    function createParticles() {
        if (particles) scene.remove(particles);
        if (redParticles) scene.remove(redParticles);
        if (greenParticles) scene.remove(greenParticles);
        if (blueParticles) scene.remove(blueParticles);

        const geometry = new THREE.BufferGeometry();
        const material = new THREE.PointsMaterial({
            size: params.particleSize,
            color: 0xffffff,
            blending: THREE.AdditiveBlending,
            transparent: true
        });

        const positions = new Float32Array(params.particleCount * 3);
        const velocities = new Float32Array(params.particleCount * 3);

        for (let i = 0; i < params.particleCount; i++) {
            const i3 = i * 3;
            positions[i3] = (Math.random() - 0.5) * 150;
            positions[i3 + 1] = (Math.random() - 0.5) * 150;
            positions[i3 + 2] = (Math.random() - 0.5) * 150;

            velocities[i3] = (Math.random() - 0.5) * 0.1;
            velocities[i3 + 1] = (Math.random() - 0.5) * 0.1;
            velocities[i3 + 2] = (Math.random() - 0.5) * 0.1;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));

        particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // Create aberration particles
        const redMaterial = material.clone();
        redMaterial.color.setHex(0xff0000);
        redMaterial.opacity = 0.5;
        const greenMaterial = material.clone();
        greenMaterial.color.setHex(0x00ff00);
        greenMaterial.opacity = 0.5;
        const blueMaterial = material.clone();
        blueMaterial.color.setHex(0x0000ff);
        blueMaterial.opacity = 0.5;

        redParticles = new THREE.Points(geometry.clone(), redMaterial);
        greenParticles = new THREE.Points(geometry.clone(), greenMaterial);
        blueParticles = new THREE.Points(geometry.clone(), blueMaterial);

        scene.add(redParticles);
        scene.add(greenParticles);
        scene.add(blueParticles);
    }

    function createBlackHole() {
        const geometry = new THREE.SphereGeometry(params.blackHoleRadius, 32, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0x000000 });
        blackHole = new THREE.Mesh(geometry, material);
        blackHole.position.set(1000, 1000, 1000); // Start off-screen
        scene.add(blackHole);
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function onMouseMove(event) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    function updateParticles() {
        const positions = particles.geometry.attributes.position.array;
        const velocities = particles.geometry.attributes.velocity.array;

        raycaster.setFromCamera(mouse, camera);
        const mousePoint = new THREE.Vector3();
        raycaster.ray.at(params.cameraDistance, mousePoint);

        for (let i = 0; i < params.particleCount; i++) {
            const i3 = i * 3;

            // Mouse gravity
            let dx = positions[i3] - mousePoint.x;
            let dy = positions[i3 + 1] - mousePoint.y;
            let dz = positions[i3 + 2] - mousePoint.z;
            let distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

            let force = params.gravitationalStrength / (distance * distance);
            velocities[i3] -= dx / distance * force;
            velocities[i3 + 1] -= dy / distance * force;
            velocities[i3 + 2] -= dz / distance * force;

            // Black hole gravity
            dx = positions[i3] - blackHole.position.x;
            dy = positions[i3 + 1] - blackHole.position.y;
            dz = positions[i3 + 2] - blackHole.position.z;
            distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

            force = params.blackHoleStrength / (distance * distance);
            velocities[i3] -= dx / distance * force;
            velocities[i3 + 1] -= dy / distance * force;
            velocities[i3 + 2] -= dz / distance * force;

            // Update position
            positions[i3] += velocities[i3];
            positions[i3 + 1] += velocities[i3 + 1];
            positions[i3 + 2] += velocities[i3 + 2];

            // Wrap around edges
            if (Math.abs(positions[i3]) > 75) positions[i3] *= -0.9, velocities[i3] = (Math.random() - 0.5) * 0.1;
            if (Math.abs(positions[i3 + 1]) > 75) positions[i3 + 1] *= -0.9, velocities[i3 + 1] = (Math.random() - 0.5) * 0.1;
            if (Math.abs(positions[i3 + 2]) > 75) positions[i3 + 2] *= -0.9, velocities[i3 + 2] = (Math.random() - 0.5) * 0.1;
        }

        particles.geometry.attributes.position.needsUpdate = true;
        particles.geometry.attributes.velocity.needsUpdate = true;

        if (isGlitching) {
            applyGlitchEffects();
        } else {
            resetGlitchEffects();
        }
    }

    function applyGlitchEffects() {
        const positions = particles.geometry.attributes.position.array;
        const redPositions = redParticles.geometry.attributes.position.array;
        const greenPositions = greenParticles.geometry.attributes.position.array;
        const bluePositions = blueParticles.geometry.attributes.position.array;

        for (let i = 0; i < params.particleCount; i++) {
            const i3 = i * 3;

            const aberrationFactor = Math.random() * params.aberrationStrength;

            redPositions[i3] = positions[i3] + aberrationFactor;
            redPositions[i3 + 1] = positions[i3 + 1] + aberrationFactor;
            redPositions[i3 + 2] = positions[i3 + 2] + aberrationFactor;

            greenPositions[i3] = positions[i3];
            greenPositions[i3 + 1] = positions[i3 + 1];
            greenPositions[i3 + 2] = positions[i3 + 2];

            bluePositions[i3] = positions[i3] - aberrationFactor;
            bluePositions[i3 + 1] = positions[i3 + 1] - aberrationFactor;
            bluePositions[i3 + 2] = positions[i3 + 2] - aberrationFactor;
        }

        redParticles.geometry.attributes.position.needsUpdate = true;
        greenParticles.geometry.attributes.position.needsUpdate = true;
        blueParticles.geometry.attributes.position.needsUpdate = true;

        redParticles.visible = true;
        greenParticles.visible = true;
        blueParticles.visible = true;
        particles.visible = false;
    }

    function resetGlitchEffects() {
        redParticles.visible = false;
        greenParticles.visible = false;
        blueParticles.visible = false;
        particles.visible = true;
    }

    function startGlitchCycle() {
        const nextGlitchIn = Math.random() * (params.glitchInterval[1] - params.glitchInterval[0]) + params.glitchInterval[0];

        setTimeout(() => {
            isGlitching = true;
            const glitchDuration = Math.random() * (params.glitchDuration[1] - params.glitchDuration[0]) + params.glitchDuration[0];

            setTimeout(() => {
                isGlitching = false;
                startGlitchCycle();
            }, glitchDuration * 1000);
        }, nextGlitchIn * 1000);
    }

    function startBlackHoleCycle() {
        const nextBlackHoleIn = params.blackHoleInterval;

        setTimeout(() => {
            launchBlackHole();
            startBlackHoleCycle();
        }, nextBlackHoleIn * 1000);
    }

    function launchBlackHole() {
        // Set random start position off-screen
        const side = Math.floor(Math.random() * 4);
        const position = new THREE.Vector3();

        switch (side) {
            case 0: // Top
                position.set(Math.random() * 150 - 80, 80, Math.random() * 150 - 80);
                break;
            case 1: // Right
                position.set(80, Math.random() * 150 - 80, Math.random() * 150 - 80);
                break;
            case 2: // Bottom
                position.set(Math.random() * 150 - 80, -80, Math.random() * 150 - 80);
                break;
            case 3: // Left
                position.set(-80, Math.random() * 150 - 80, Math.random() * 150 - 80);
                break;
        }

        blackHole.position.copy(position);

        // Set random trajectory
        const target = new THREE.Vector3(
            Math.random() * 200 - 80,
            Math.random() * 200 - 80,
            Math.random() * 200 - 80
        );

        const direction = new THREE.Vector3().subVectors(target, position).normalize();
        blackHole.userData.velocity = direction.multiplyScalar(params.blackHoleSpeed);
    }

    function updateBlackHole() {
        if (blackHole.userData.velocity) {
            blackHole.position.add(blackHole.userData.velocity);

            // Check if black hole is off-screen
            if (Math.abs(blackHole.position.x) > 200 ||
                Math.abs(blackHole.position.y) > 200 ||
                Math.abs(blackHole.position.z) > 200) {
                blackHole.position.set(1000, 1000, 1000);
                blackHole.userData.velocity = null;
            }
        }
    }

    function updateCamera() {
        const time = clock.getElapsedTime();
        const angle = time * params.cameraRotationSpeed;

        camera.position.x = Math.sin(angle) * params.cameraDistance * 0.7;
        camera.position.z = Math.cos(angle) * params.cameraDistance * 0.7;
        camera.position.y = Math.sin(time * 0.01) * params.cameraDistance * 0.7;

        camera.lookAt(scene.position);
    }

    function animate() {
        requestAnimationFrame(animate);

        updateParticles();
        updateBlackHole();
        updateCamera();

        renderer.render(scene, camera);
    }

    init();
    animate();
});
