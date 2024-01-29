import React, { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';
import block from './icons/counting_block.png'

const CoinQuestGame = () => {
    const pixiContainerRef = useRef(null);

    useEffect(() => {
        // Create a PixiJS application
        const app = new PIXI.Application({
            width: window.innerWidth,
            height: window.innerHeight,
            backgroundColor: 0xb1dade,
        });

        // Append the PixiJS application view to the container
        pixiContainerRef.current.appendChild(app.view);

        // Create a PixiJS sprite
        const sprite = PIXI.Sprite.from(block);
        sprite.eventMode='static'
        sprite.cursor='pointer'
        sprite.anchor.set(0.5, 0.5)
        sprite.on('pointerdown', onDragStart, sprite);

        // Add the sprite to the stage
        app.stage.addChild(sprite);


        let dragTarget = null;

        app.stage.eventMode = 'static';
        app.stage.hitArea = app.screen;
        app.stage.on('pointerup', onDragEnd);
        app.stage.on('pointerupoutside', onDragEnd);

        function onDragMove(event) {
            if (dragTarget) {
                dragTarget.parent.toLocal(event.global, null, dragTarget.position);
            }
        }

        function onDragStart() {
            // store a reference to the data
            // the reason for this is because of multitouch
            // we want to track the movement of this particular touch
            // this.data = event.data;
            this.alpha = 0.5;
            dragTarget = this;
            app.stage.on('pointermove', onDragMove);
        }

        function onDragEnd() {
            if (dragTarget) {
                app.stage.off('pointermove', onDragMove);
                dragTarget.alpha = 1;
                dragTarget = null;
            }
        }

        // Clean up when component unmounts
        return () => {
            app.destroy(true);
        };
    }, []);

    return <div ref={pixiContainerRef} />;
};

export default CoinQuestGame;

