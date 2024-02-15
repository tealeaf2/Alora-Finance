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
        sprite.x = app.view.width/2
        sprite.y = app.view.height/2
        sprite.on('pointerdown', onDragStart, sprite);

        // Adjust sprite size
        sprite.width = 50;
        sprite.height = 50;

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

        

         // Create a button to add 1 block
        let addOne = new PIXI.Graphics();
        addOne.beginFill(0x258f99);
        addOne.drawRoundedRect((app.view.width - 130), 30, 100, 50);
        addOne.endFill();
        addOne.interactive = true;
        addOne.buttonMode = true;
        app.stage.addChild(addOne);
        addOne.on('click', placeOne)

        // Create a button to add 10 blocks
        let addTen = new PIXI.Graphics();
        addTen.beginFill(0x258f99);
        addTen.drawRoundedRect((app.view.width - 130), 130, 100, 50);
        addTen.endFill();
        addTen.interactive = true;
        addTen.buttonMode = true;
        app.stage.addChild(addTen);
        addTen.on('click', placeTen)

        // Create a button to add 100 block
        let addHundred = new PIXI.Graphics();
        addHundred.beginFill(0x258f99);
        addHundred.drawRoundedRect((app.view.width - 130), 230, 100, 50);
        addHundred.endFill();
        addHundred.interactive = true;
        addHundred.buttonMode = true;
        app.stage.addChild(addHundred);
        addHundred.on('click', placeHundred)

        //generate new sprite of one block
        function placeOne(e) {
            //placeholder sprite - replace with one block sprite
            const sprite2 = PIXI.Sprite.from(block);
            sprite2.eventMode='static'
            sprite2.cursor='pointer'
            sprite2.anchor.set(0.5, 0.5)
            sprite2.on('pointerdown', onDragStart, sprite2);
            sprite2.width = 50;
            sprite2.height = 50;
            sprite2.x = (Math.random() * app.view.width * 0.50) + (app.view.width * 0.25);
            sprite2.y = (Math.random() * app.view.height * 0.50) + (app.view.height * 0.25);
            app.stage.addChild(sprite2);
        }

        function placeTen(e) {
            //placeholder sprite - replace with one block sprite
            const sprite2 = PIXI.Sprite.from(block);
            sprite2.eventMode='static'
            sprite2.cursor='pointer'
            sprite2.anchor.set(0.5, 0.5)
            sprite2.on('pointerdown', onDragStart, sprite2);
            sprite2.width = 50;
            sprite2.height = 50;
            sprite2.x = (Math.random() * app.view.width * 0.50) + (app.view.width * 0.25);
            sprite2.y = (Math.random() * app.view.height * 0.50) + (app.view.height * 0.25);
            app.stage.addChild(sprite2);
        }

        function placeHundred(e) {
            //placeholder sprite - replace with one block sprite
            const sprite2 = PIXI.Sprite.from(block);
            sprite2.eventMode='static'
            sprite2.cursor='pointer'
            sprite2.anchor.set(0.5, 0.5)
            sprite2.on('pointerdown', onDragStart, sprite2);
            sprite2.width = 50;
            sprite2.height = 50;
            sprite2.x = (Math.random() * app.view.width * 0.50) + (app.view.width * 0.25);
            sprite2.y = (Math.random() * app.view.height * 0.50) + (app.view.height * 0.25);
            app.stage.addChild(sprite2);
        }
            
    



        // Clean up when component unmounts
        return () => {
            app.destroy(true);
        };
    }, []);

    return <div ref={pixiContainerRef} />;
};

export default CoinQuestGame;

