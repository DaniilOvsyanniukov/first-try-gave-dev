class Card extends Phaser.GameObjects.Sprite{
    constructor(scene, value) {
        super(scene, 0, 0, 'card');
        this.scene = scene;
        this.value = value;
        this.scene.add.existing(this);
        this.setInteractive();
        this.opened = false
    }
    open() {
        this.flip("card" + this.value)
        this.opened = true;
    }
    close() {
        this.opened= false
        this.flip('card')
    }
    flip(texture) {
            this.scene.tweens.add({
            targets: this,
            scaleX: 0,
            ease: 'Linear',
                duration: 150,
                onComplete: () => {
                    this.show(texture)
                }
        })
    }
    show(texture) {
        this.setTexture(texture)
        this.scene.tweens.add({
                        targets: this,
                        scaleX: 1,
                        ease: 'Linear',
                        duration: 150,
                    })
    }
}
