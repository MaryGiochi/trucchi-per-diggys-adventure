/**
 * progressManager - Simple Progress Tracking System
 * Author: MaryGiochi
 * License: Custom
 */

class progressManager {
    /**
     * Initializes the progress tracker.
     * @param {number} maxValue - Maximum value for completion.
     */
    constructor(maxValue) {
        if (typeof maxValue !== 'number' || maxValue <= 0) {
            throw new Error('[progressManager] Invalid maximum value.');
        }
        this.currentValue = 0;
        this.maxValue = maxValue;
    }

    /**
     * Increments progress by a specific amount.
     * @param {number} amount - Amount to add.
     */
    add(amount) {
        if (typeof amount !== 'number' || amount <= 0) {
            console.error('[progressManager] Invalid amount.');
            return;
        }
        this.currentValue = Math.min(this.currentValue + amount, this.maxValue);
        console.log(`[progressManager] Progress: ${this.currentValue}/${this.maxValue}`);
    }

    /**
     * Returns the current progress as a percentage.
     * @returns {number}
     */
    getPercentage() {
        return Math.round((this.currentValue / this.maxValue) * 100);
    }

    /**
     * Resets progress to zero.
     */
    reset() {
        this.currentValue = 0;
        console.log('[progressManager] Progress reset.');
    }
}

// Example usage:
// const progress = new progressManager(100);
// progress.add(25);
// console.log(progress.getPercentage()); // 25
// progress.reset();

module.exports = progressManager;
