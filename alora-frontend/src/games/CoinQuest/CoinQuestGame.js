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

        //randomly generate target number
        let targetNum = Math.round(Math.random() * 1000);

        //create current number
        let currentNum = 0;

        //generate target text
        var targetText = new PIXI.Text("Target number: " + targetNum, {font:"50px", fill:"black"});
        app.stage.addChild(targetText);

        //display current number
        var currentText = new PIXI.Text("Current total: " + currentNum, {font:"50px", fill:"black"});
        app.stage.addChild(currentText);
        currentText.y = app.view.height * 0.10;

        //draw buttons
        oneButton();
        tenButton();
        hundredButton();

        //add text to buttons
        var oneButtonText = new PIXI.Text("Add 1 block", {fontSize: 14, font:"10px", fill:"black"});
        app.stage.addChild(oneButtonText);
        oneButtonText.x = (app.view.width - 120);
        oneButtonText.y = 47;
        oneButtonText.interactive = true;
        oneButtonText.buttonMode = true;
        oneButtonText.on('click', placeOne);

        var tenButtonText = new PIXI.Text("Add 10 blocks", {fontSize: 14, font:"10px", fill:"black"});
        app.stage.addChild(tenButtonText);
        tenButtonText.x = (app.view.width - 125);
        tenButtonText.y = 147;
        tenButtonText.interactive = true;
        tenButtonText.buttonMode = true;
        tenButtonText.on('click', placeTen);

        var hundredButtonText = new PIXI.Text("Add 100 blocks", {fontSize: 14, font:"10px", fill:"black"});
        app.stage.addChild(hundredButtonText);
        hundredButtonText.x = (app.view.width - 128);
        hundredButtonText.y = 247;
        hundredButtonText.interactive = true;
        hundredButtonText.buttonMode = true;
        hundredButtonText.on('click', placeHundred);


        // Create a button to add 1 block
        
        function oneButton() {
            let addOne = new PIXI.Graphics();
            addOne.beginFill(0x258f99);
            addOne.drawRoundedRect((app.view.width - 130), 30, 100, 50);
            addOne.endFill();
            app.stage.addChild(addOne);
            addOne.interactive = true;
            addOne.buttonMode = true;
            addOne.on('click', placeOne);
        }

        // Create a button to add 10 blocks
        function tenButton () {
            let addTen = new PIXI.Graphics();
            addTen.beginFill(0x258f99);
            addTen.drawRoundedRect((app.view.width - 130), 130, 100, 50);
            addTen.endFill();
            addTen.interactive = true;
            addTen.buttonMode = true;
            app.stage.addChild(addTen);
            addTen.on('click', placeTen)
        }

        // Create a button to add 100 block
        function hundredButton () {
            let addHundred = new PIXI.Graphics();
            addHundred.beginFill(0x258f99);
            addHundred.drawRoundedRect((app.view.width - 130), 230, 100, 50);
            addHundred.endFill();
            addHundred.interactive = true;
            addHundred.buttonMode = true;
            app.stage.addChild(addHundred);
            addHundred.on('click', placeHundred)
        }


        let xCount = 300;
        let yCount = 200;

        //function to determine placement of sprites
        function spriteLocation () {

            if (xCount % 1000 === 0) {

                yCount = yCount + 100;
                xCount = 300;

            } else if (yCount > 700) {

                //clear stage
                app.stage.removeChildren(true);

                //display failure text
                var spaceText = new PIXI.Text("You placed too many blocks! Try using larger quantities next time.", {font:"50px", fill:"black", x:0.5, y:0.5});
                spaceText.x = app.view.width * 0.25;
                spaceText.y = app.view.height * 0.50;
                app.stage.addChild(spaceText);

                //display restart button
                restartButton();


            } else {

                xCount = xCount + 100;

            }


        }


        //generate new sprite of single block piece
        function placeOne(e) {

            //placeholder sprite - replace with one block sprite
            const sprite1 = PIXI.Sprite.from(block);
            sprite1.eventMode='static'
            sprite1.cursor='pointer'
            sprite1.anchor.set(0.5, 0.5)
            sprite1.on('pointerdown', onDragStart, sprite1);
            sprite1.width = 50;
            sprite1.height = 50;
            sprite1.x = xCount;
            sprite1.y = yCount;
            app.stage.addChild(sprite1);
            currentNum = currentNum + 1;
            spriteLocation();
            updateTotal();
        }

        //generate new sprite of ten block piece
        function placeTen(e) {


            //placeholder sprite - replace with ten block sprite
            const sprite10 = PIXI.Sprite.from(block);
            sprite10.eventMode='static'
            sprite10.cursor='pointer'
            sprite10.anchor.set(0.5, 0.5)
            sprite10.on('pointerdown', onDragStart, sprite10);
            sprite10.width = 50;
            sprite10.height = 50;
            sprite10.x = xCount;
            sprite10.y = yCount;
            app.stage.addChild(sprite10);
            currentNum = currentNum + 10;
            spriteLocation();
            updateTotal();
        }

        //generate new sprite of 100 block sprite
        function placeHundred(e) {

            //placeholder sprite - replace with one block sprite
            const sprite100 = PIXI.Sprite.from(block);
            sprite100.eventMode='static'
            sprite100.cursor='pointer'
            sprite100.anchor.set(0.5, 0.5)
            sprite100.on('pointerdown', onDragStart, sprite100);
            sprite100.width = 50;
            sprite100.height = 50;
            sprite100.x = xCount;
            sprite100.y = yCount;
            app.stage.addChild(sprite100);
            currentNum = currentNum + 100;
            spriteLocation();
            updateTotal();
        }

        function updateTotal(e) {

            currentText.text = 'Current total: ' + currentNum;

            if (targetNum === currentNum) {

                //clear stage
                app.stage.removeChildren(true);

                //display win screen text
                var winText = new PIXI.Text("Well done!", {font:"50px", fill:"black", x:0.5, y:0.5});
                winText.x = app.view.width * 0.44;
                winText.y = app.view.height * 0.50;
                app.stage.addChild(winText);
                
                //display restart button
                restartButton();

            } else if (currentNum > targetNum) {

                //clear stage
                app.stage.removeChildren(true);

                //display failure text
                var failText = new PIXI.Text("You went over!", {font:"50px", fill:"black", x:0.5, y:0.5});
                failText.x = app.view.width * 0.43;
                failText.y = app.view.height * 0.50;
                app.stage.addChild(failText);

                //display restart button
                restartButton();


            }

        }

        function restartButton () {
            
            //create button
            let restart = new PIXI.Graphics();
            restart.beginFill(0x258f99);
            restart.drawRoundedRect((app.view.width/2 - 70), 450, 100, 50);
            restart.endFill();
            app.stage.addChild(restart);
            restart.interactive = true;
            restart.buttonMode = true;
            restart.on('click', refresh);

            //add label text
            var restartText = new PIXI.Text("Play again", {fontSize: 14, font:"10px", fill:"black"});
            app.stage.addChild(restartText);
            restartText.x = (app.view.width/2 - 53);
            restartText.y = 465;
            restartText.interactive = true;
            restartText.buttonMode = true;
            restartText.on('click', refresh);
        }

        function refresh () {

            window.location.reload();

        }
            
        

        // Clean up when component unmounts
        return () => {
            app.destroy(true);
        };
    }, []);

    return <div ref={pixiContainerRef} />;
};

export default CoinQuestGame;

