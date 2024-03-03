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
        let targetNum = (Math.random() * 10).toFixed(2);

        //create current number
        let currentNum = 0;

        //draw line
        let rect = new PIXI.Graphics();
        rect.beginFill(0x000000)
        rect.drawRect((app.view.width*0.8), 0, 1, 10000);
        rect.endFill();
        app.stage.addChild(rect);

        //draw receipt
        let rect2 = new PIXI.Graphics();
        rect2.beginFill(0xdce1e8)
        rect2.drawRect(0, 0, 250, 300);
        rect2.endFill();
        app.stage.addChild(rect2);

        //generate receipt text
        var receiptText = new PIXI.Text("RECEIPT", {font:"75px", fill:"black"});
        rect2.addChild(receiptText);

        //generate target text
        var targetText = new PIXI.Text("TOTAL: $" + targetNum, {font:"50px", fill:"black"});
        rect2.addChild(targetText)
        targetText.y = app.view.height * 0.10;

        //display current number
        var currentText = new PIXI.Text("PAID: $" + Math.abs(currentNum), {font:"50px", fill:"black"});
        rect2.addChild(currentText);
        currentText.y = app.view.height * 0.20;

        //add text
        var pennyButtonText = new PIXI.Text("Add penny", {fontSize: 14, font:"10px", fill:"black"});
        app.stage.addChild(pennyButtonText);
        pennyButtonText.x = (app.view.width - 120);
        pennyButtonText.y = 47;
        pennyButtonText.interactive = true;
        pennyButtonText.buttonMode = true;
        pennyButtonText.on('click', placePenny);

        var nickelButtonText = new PIXI.Text("Add nickel", {fontSize: 14, font:"10px", fill:"black"});
        app.stage.addChild(nickelButtonText);
        nickelButtonText.x = (app.view.width - 120);
        nickelButtonText.y = 147;
        nickelButtonText.interactive = true;
        nickelButtonText.buttonMode = true;
        nickelButtonText.on('click', placeNickel);

        var dimeButtonText = new PIXI.Text("Add dime", {fontSize: 14, font:"10px", fill:"black"});
        app.stage.addChild(dimeButtonText);
        dimeButtonText.x = (app.view.width - 120);
        dimeButtonText.y = 247;
        dimeButtonText.interactive = true;
        dimeButtonText.buttonMode = true;
        dimeButtonText.on('click', placeDime);

        var quarterButtonText = new PIXI.Text("Add quarter", {fontSize: 14, font:"10px", fill:"black"});
        app.stage.addChild(quarterButtonText);
        quarterButtonText.x = (app.view.width - 120);
        quarterButtonText.y = 347;
        quarterButtonText.interactive = true;
        quarterButtonText.buttonMode = true;
        quarterButtonText.on('click', placeQuarter);

        var dollarButtonText = new PIXI.Text("Add dollar", {fontSize: 14, font:"10px", fill:"black"});
        app.stage.addChild(dollarButtonText);
        dollarButtonText.x = (app.view.width - 116);
        dollarButtonText.y = 447;
        dollarButtonText.interactive = true;
        dollarButtonText.buttonMode = true;
        dollarButtonText.on('click', placeDollar);


        // Create a button to add penny
        function pennyButton() {
            let addPenny = new PIXI.Graphics();
            addPenny.beginFill(0x258f99);
            addPenny.drawRoundedRect((app.view.width - 130), 30, 100, 50);
            addPenny.endFill();
            app.stage.addChild(addPenny);
            addPenny.interactive = true;
            addPenny.buttonMode = true;
            addPenny.on('click', placePenny);
        }

        //Create button to add nickel
        function nickelButton () {
            let addNickel = new PIXI.Graphics();
            addNickel.beginFill(0x258f99);
            addNickel.drawRoundedRect((app.view.width - 130), 130, 100, 50);
            addNickel.endFill();
            addNickel.interactive = true;
            addNickel.buttonMode = true;
            app.stage.addChild(addNickel);
            addNickel.on('click', placeNickel)
        }

        //Create a button to add dime
        function dimeButton () {
            let addDime = new PIXI.Graphics();
            addDime.beginFill(0x258f99);
            addDime.drawRoundedRect((app.view.width - 130), 230, 100, 50);
            addDime.endFill();
            addDime.interactive = true;
            addDime.buttonMode = true;
            app.stage.addChild(addDime);
            addDime.on('click', placeDime)
        }

        //Create button to add quarter
        function quarterButton () {
            let addQuarter = new PIXI.Graphics();
            addQuarter.beginFill(0x258f99);
            addQuarter.drawRoundedRect((app.view.width - 130), 330, 100, 50);
            addQuarter.endFill();
            addQuarter.interactive = true;
            addQuarter.buttonMode = true;
            app.stage.addChild(addQuarter);
            addQuarter.on('click', placeQuarter)
        }

        // Create a button to add 100 block
        function dollarButton () {
            let addDollar = new PIXI.Graphics();
            addDollar.beginFill(0x258f99);
            addDollar.drawRoundedRect((app.view.width - 130), 430, 100, 50);
            addDollar.endFill();
            addDollar.interactive = true;
            addDollar.buttonMode = true;
            app.stage.addChild(addDollar);
            addDollar.on('click', placeDollar)
        }

        //set counts for sprite placement
        let xCount = 300;
        let yCount = 200;

        placePenny();
        placeNickel();
        placeDime();
        placeQuarter();
        placeDollar();

        //functions to handle new coin addition
        function pennyCheck() {
            if (this['added'] == 0) {
                if (this.getBounds().x < (app.view.width*0.8)) {
                    currentNum = currentNum + 0.01;
                }
                placePenny()
            }
            if (this.getBounds().x >= (app.view.width*0.8)) {
            this.destroy()
                if (this['added'] == 1) {
                    currentNum = currentNum - 0.01;
                }
            }
            this['added'] = 1
            updateTotal()
        }

        function nickelCheck() {
            if (this['added'] == 0) {
                if (this.getBounds().x < (app.view.width*0.8)) {
                    currentNum = currentNum + 0.05;
                }
                placeNickel()
            } 
            if (this.getBounds().x >= (app.view.width*0.8)) {
                this.destroy()
                if (this['added'] == 1) {
                    currentNum = currentNum - 0.05;
                }
            }
            this['added'] = 1
            updateTotal()
        }

        function dimeCheck() {
            if (this['added'] == 0) {
                if (this.getBounds().x < (app.view.width*0.8)) {
                    currentNum = currentNum + 0.10;
                }
                placeDime()
            }
            if (this.getBounds().x >= (app.view.width*0.8)) {
            this.destroy()
                if (this['added'] == 1) {
                  currentNum = currentNum - 0.10;
                }
            }
            this['added'] = 1
            updateTotal()
        }

        function quarterCheck() {
            if (this['added'] == 0) {
                if (this.getBounds().x < (app.view.width*0.8)) {
                    currentNum = currentNum + 0.25;
                }
                placeQuarter()
            }
            if (this.getBounds().x >= (app.view.width*0.8)) {
            this.destroy()
                if (this['added'] == 1) {
                    currentNum = currentNum - 0.25;
                }
            }
            this['added'] = 1
            updateTotal()
        }

        function dollarCheck() {
            if (this['added'] == 0) {
                if (this.getBounds().x < (app.view.width*0.8)) {
                    currentNum = currentNum + 1;
                }
                placeDollar()
            }
            if (this.getBounds().x >= (app.view.width*0.8)) {
            this.destroy()
                if (this['added'] == 1) {
                    currentNum = currentNum - 1;
                }
            }
            this['added'] = 1
            updateTotal()
        }

        //generate new sprite of single block piece
        function placePenny(e) {

            //placeholder sprite - replace with penny block sprite
            const pennySprite = PIXI.Sprite.from(block);
            //status to keep track of whether a coin has been added yet
            pennySprite['added'] = 0
            pennySprite.eventMode='static'
            pennySprite.cursor='pointer'
            pennySprite.anchor.set(0.5, 0.5)
            pennySprite.on('pointerdown', onDragStart, pennySprite);
            pennySprite.on('pointerup', pennyCheck, pennySprite);
            pennySprite.width = 30;
            pennySprite.height = 30;
            pennySprite.x = (app.view.width - 90);
            pennySprite.y = 100;
            app.stage.addChild(pennySprite);
            updateTotal();
        }

        function placeNickel(e) {


            //placeholder sprite - replace with nickel block sprite
            const nickelSprite = PIXI.Sprite.from(block);
            nickelSprite['added'] = 0
            nickelSprite.eventMode='static'
            nickelSprite.cursor='pointer'
            nickelSprite.anchor.set(0.5, 0.5)
            nickelSprite.on('pointerdown', onDragStart, nickelSprite);
            nickelSprite.on('pointerup', nickelCheck, nickelSprite);
            nickelSprite.width = 30;
            nickelSprite.height = 30;
            nickelSprite.x = (app.view.width - 90);
            nickelSprite.y = 200;
            app.stage.addChild(nickelSprite);
            updateTotal();
        }

        //generate new sprite of dime block piece
        function placeDime(e) {


            //placeholder sprite - replace with dime block sprite
            const dimeSprite = PIXI.Sprite.from(block);
            dimeSprite['added'] = 0
            dimeSprite.eventMode='static'
            dimeSprite.cursor='pointer'
            dimeSprite.anchor.set(0.5, 0.5)
            dimeSprite.on('pointerdown', onDragStart, dimeSprite);
            dimeSprite.on('pointerup', dimeCheck, dimeSprite);
            dimeSprite.width = 30;
            dimeSprite.height = 30;
            dimeSprite.x = (app.view.width - 90);
            dimeSprite.y = 300;
            app.stage.addChild(dimeSprite);
            updateTotal();
        }

        function placeQuarter(e) {


            //placeholder sprite - replace with quarter block sprite
            const quarterSprite = PIXI.Sprite.from(block);
            quarterSprite['added'] = 0
            quarterSprite.eventMode='static'
            quarterSprite.cursor='pointer'
            quarterSprite.anchor.set(0.5, 0.5)
            quarterSprite.on('pointerdown', onDragStart, quarterSprite);
            quarterSprite.on('pointerup', quarterCheck, quarterSprite);
            quarterSprite.width = 30;
            quarterSprite.height = 30;
            quarterSprite.x = (app.view.width - 90);
            quarterSprite.y = 400;
            app.stage.addChild(quarterSprite);
            updateTotal();
        }

        //generate new sprite of 100 block sprite
        function placeDollar(e) {

            //placeholder sprite - replace with penny block sprite
            const dollarSprite = PIXI.Sprite.from(block);
            dollarSprite['added'] = 0
            dollarSprite.eventMode='static'
            dollarSprite.cursor='pointer'
            dollarSprite.anchor.set(0.5, 0.5)
            dollarSprite.on('pointerdown', onDragStart, dollarSprite);
            dollarSprite.on('pointerup', dollarCheck, dollarSprite);
            dollarSprite.width = 30;
            dollarSprite.height = 30;
            dollarSprite.x = (app.view.width - 90);
            dollarSprite.y = 500;
            app.stage.addChild(dollarSprite);
            updateTotal();
        }

        function updateTotal(e) {

            console.log(targetNum)
            console.log(currentNum)

            currentText.text = 'PAID: $' + currentNum.toFixed(2);

            if (targetNum === currentNum.toFixed(2)) {

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

