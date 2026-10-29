/**
 * BackgroundController
 * Dedicated asset management for downloaded loop tracks
 */
(function(window) {
    const controller = {
        element: null,

        init() {
            if (!this.element) {
                this.element = document.getElementById('ambient.mp3');
                if (this.element) {
                    this.element.volume = 0.30; // Soft 30% background mixing depth
                }
            }
        },

        play() {
            this.init();
            if (this.element) {
                this.element.play().catch(err => {
                    console.log("Audio activation awaiting initial user browser click.");
                });
            }
        },

        stop() {
            this.init();
            if (this.element) {
                this.element.pause();
                this.element.currentTime = 0;
            }
        },

        setSpeed(rate) {
            this.init();
            if (this.element) {
                this.element.playbackRate = rate;
            }
        }
    };

    window.BackgroundController = controller;
})(window);