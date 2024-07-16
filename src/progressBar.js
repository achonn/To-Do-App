// progressBar.js
import TaskManager from './tasksManager';

const ProgressBar = (() => {
    const updateProgressBar = () => {
        const toDos = TaskManager.getToDos();
        const completedTasks = toDos.filter(task => task.completed).length;
        const totalTasks = toDos.length;
        const progress = totalTasks ? (completedTasks / totalTasks) * 100 : 0;
        const progressBar = document.getElementById('progress');
        progressBar.style.width = `${progress}%`;
        document.getElementById('numbers').innerText = `${completedTasks} / ${totalTasks}`;

        if (totalTasks && completedTasks === totalTasks) {
            blastConfetti();
        }
    };

    const blastConfetti = () => {
        const count = 200;
        const defaults = {
            origin: { y: 0.7 },
        };

        function fire(particleRatio, opts) {
            confetti(
                Object.assign({}, defaults, opts, {
                    particleCount: Math.floor(count * particleRatio),
                })
            );
        }

        fire(0.25, {
            spread: 26,
            startVelocity: 55,
        });

        fire(0.2, {
            spread: 60,
        });

        fire(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8,
        });

        fire(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2,
        });

        fire(0.1, {
            spread: 120,
            startVelocity: 45,
        });
    };

    return {
        updateProgressBar,
    };
})();

export default ProgressBar;
