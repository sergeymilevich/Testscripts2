browser.addCommand("untilTime", function (time) {
    return this.waitUntil(function() {
        var promise = new Promise(function(resolve) {
            setTimeout(resolve, time)
        });

        return promise.then(function() {
            return true;
        });
    })
});

describe('webdriver.io page', function() {
    it('Check if title is correct', function(done) {
        browser
            .url('/') //get URL from wdio.conf.js
            .getTitle(function(err, title) { //get title of opened page
                expect(err).toBe(undefined);
                expect(title).toBe('FIVE GUYS NFL Challenge'); //if title is 'FIVE GUYS NFL Challenge' - mark as passed
            })
            .call(done);
    });

    it('Finding shop to test and clicking on it', function(done) {
        browser
            .waitForVisible('.dropdown-toggle') //wait until dropdown button appears
            .untilTime(1000)
            .click('.dropdown-toggle') // click on dropdown button
            .untilTime(1000)
            .click('#29') //click on option 29 in dropdown list
            .untilTime(1000)
            .click('button.btn.btn-primary.choose-store.select-store') //click on Let's play button
            .waitForVisible('button.btn.btn-default.confirm-store.pick-different') //wait until "pick a different team quiz" will be visible
            .call(done);
    });

    it('Click on take me to NFL challenge', function(done) {
        browser
            .untilTime(2000)
            .click('button.btn.btn-primary.confirm-store.start-game') //click on "take me to NFL challenge" button
            .call(done);
    });

    it('Choosing wrong option in round 1', function(done) {
        browser
            .waitForVisible(".view-voteable")
            .untilTime(1000)
            .waitUntil(function() {
                var self = this;

                return this.getText('.indent').then(function (value) { //getting text of answer
                    var button;

                   if (value === 'What should you use to block an opposing player?'){ //depending on question pick wrong answer
                       button = '.btn-grp.type-stacked div:nth-child(2) button.btn.btn-default.btn-lg.btn-block';
                   } else if (value === 'What might you find an American Football coach reading on the sideline?'){
                       button = '.btn-grp.type-stacked div:nth-child(3) button.btn.btn-default.btn-lg.btn-block';
                   } else if (value === 'How many times can the ball be thrown forward during one play of an American Football match?'){
                       button = '.btn-grp.type-stacked div:nth-child(4) button.btn.btn-default.btn-lg.btn-block';
                   } else if (value === 'What is the name of the Cardinals\' mascot?'){
                       button = '.btn-grp.type-stacked div:nth-child(1) button.btn.btn-default.btn-lg.btn-block';
                   }

                    return self.click(button); //click on button depending on question text
               }).then(function () {
                    return true;
                })
            })
            .untilTime(1500)
            .call(done);


    });

    it('Choosing correct option in round 1', function(done) {
        browser
            .waitForVisible(".view-voteable")
            .untilTime(1000)
            .waitUntil(function() {
                var self = this;

                return this.getText('.indent').then(function (value) { //getting text of answer
                    var button;

                    console.log(value);

                    if (value === 'What should you use to block an opposing player?') { //depending on question pick correct option
                        button = '.btn-grp.type-stacked div:nth-child(1) button.btn.btn-default.btn-lg.btn-block';
                    } else if (value === 'What might you find an American Football coach reading on the sideline?') {
                        button = '.btn-grp.type-stacked div:nth-child(4) button.btn.btn-default.btn-lg.btn-block';
                    } else if (value === 'How many times can the ball be thrown forward during one play of an American Football match?') {
                        button = '.btn-grp.type-stacked div:nth-child(1) button.btn.btn-default.btn-lg.btn-block';
                    } else if (value === 'What is the name of the Cardinals\' mascot?') {
                        button = '.btn-grp.type-stacked div:nth-child(3) button.btn.btn-default.btn-lg.btn-block';
                    }

                    return self.click(button); //click on button depending on question text
                }).then(function () {
                    return true;
                })
            })
            .untilTime(1500)
            .call(done);
    });

    it('Choosing wrong option in round 2', function(done) {
        browser
            .waitForVisible(".view-voteable.view-poll")
            .untilTime(1000)
            .waitUntil(function() {
                var self = this;

                return this.getText('.indent').then(function (value) { //getting text of answer
                    var button;

                    console.log(value);

                    if (value === 'Where does a pre-game fans\' tailgate party take place?'){ //depending on question pick wrong option
                        button = '.btn-grp.type-grid div:nth-child(1) button.btn.btn-default.btn-lg.btn-block.btn-img';
                    } else if (value === 'Which of these represents a penalty in American Football?'){
                        button = '.btn-grp.type-grid div:nth-child(4) button.btn.btn-default.btn-lg.btn-block.btn-img';
                    } else if (value === 'Which one of these symbols means \'timeout\' in American Football?'){
                        button = '.btn-grp.type-grid div:nth-child(2) button.btn.btn-default.btn-lg.btn-block.btn-img';
                    } else if (value === 'The NFL celebrates its 50th Super Bowl this season. Which of these traditionally marks a 50th?'){
                        button = '.btn-grp.type-grid div:nth-child(1) button.btn.btn-default.btn-lg.btn-block.btn-img';
                    }

                    return self.click(button); //click on button depending on question tex
                }).then(function () {

                    return true;
                })
            })
            .untilTime(5000)
            .call(done);
    });

    it('Choosing correct option in round 2', function(done) {
        browser
            .untilTime(3000)
            .waitForVisible(".view-poll")
            .waitUntil(function() {
                var self = this;

                return this.getText('.indent').then(function (value) { //getting text of answer
                    var button;

                    console.log(value);

                    if (value === 'Where does a pre-game fans\' tailgate party take place?'){ //depending on question pick correct option
                        button = '.btn-grp.type-grid div:nth-child(2) .btn.btn-default.btn-lg.btn-block.btn-img';
                    } else if (value === 'Which of these represents a penalty in American Football?'){
                        button = '.btn-grp.type-grid div:nth-child(1) .btn.btn-default.btn-lg.btn-block.btn-img';
                    } else if (value === 'Which one of these symbols means \'timeout\' in American Football?'){
                        button = '.btn-grp.type-grid div:nth-child(1) .btn.btn-default.btn-lg.btn-block.btn-img';
                    } else if (value === 'The NFL celebrates its 50th Super Bowl this season. Which of these traditionally marks a 50th?'){
                        button = '.btn-grp.type-grid div:nth-child(3) .btn.btn-default.btn-lg.btn-block.btn-img';
                    }

                    browser.log(value, button);

                    return self.click(button); //click on button depending on question text
                }).then(function () {
                    return true;
                })
            })
            .untilTime(1500)
            .call(done);
    });

    it('Choosing wrong option in round 3', function(done) {
        browser
            .waitForVisible(".view-voteable.view-poll")
            .untilTime(1000)
            .waitUntil(function() {
                var self = this;

                return this.getText('.indent').then(function (value) { //getting text of answer
                    var button;

                    console.log(value);

                    if (value === 'Which of these is Arizona, home of the Cardinals?'){ //depending on question pick wrong option
                        button = '.btn-grp.type-stacked div:nth-child(3) button.btn.btn-default.btn-lg.btn-block';
                    } else if (value === 'When a player kicks a ball like this, it\'s called:'){
                        button = '.btn-grp.type-stacked div:nth-child(2) button.btn.btn-default.btn-lg.btn-block';
                    } else if (value === 'Name the Cardinals\' star?'){
                        button = '.btn-grp.type-stacked div:nth-child(3) button.btn.btn-default.btn-lg.btn-block';
                    } else if (value === 'Which team\'s logo is pictured?'){
                        button = '.btn-grp.type-stacked div:nth-child(1) button.btn.btn-default.btn-lg.btn-block';
                    }

                    return self.click(button); //click on button depending on question tex
                }).then(function () {

                    return true;
                })
            })
            .untilTime(1500)
            .call(done);
    });

        it('Choosing correct option in round 3', function(done) {
            browser
                .waitForVisible(".view-poll")
                .untilTime(1000)
                .waitUntil(function() {
                    var self = this;

                    return this.getText('.indent').then(function (value) { //getting text of answer
                        var button;

                        console.log(value);

                        if (value === 'Which of these is Arizona, home of the Cardinals?'){ //depending on question pick wrong option
                            button = '.btn-grp.type-stacked div:nth-child(1) button.btn.btn-default.btn-lg.btn-block';
                        } else if (value === 'When a player kicks a ball like this, it\'s called:'){
                            button = '.btn-grp.type-stacked div:nth-child(3) button.btn.btn-default.btn-lg.btn-block';
                        } else if (value === 'Name the Cardinals\' star?'){
                            button = '.btn-grp.type-stacked div:nth-child(1) button.btn.btn-default.btn-lg.btn-block';
                        } else if (value === 'Which team\'s logo is pictured?'){
                            button = '.btn-grp.type-stacked div:nth-child(2) button.btn.btn-default.btn-lg.btn-block';
                        }

                        return self.click(button); //click on button depending on question text
                    }).then(function () {

                        return true;
                    })
                })
                .untilTime(4000)
                .call(done);
        });

    it('Choosing incorrect letterss in round 4', function(done) {
        browser
            .untilTime(4000)
            .waitUntil(function() {
                var self = this;


                return this.getText('.indent h2').then(function (value) { //getting text of answer
                    console.log(value);

                    if (value === 'How many points are awarded for a touchdown?'){ //depending on question clicking on incorrect letters (always 2 first letters)
                        return self
                            .click('.type-puzzle div:nth-child(1) button.btn.btn-puzzle')
                            .untilTime(1000)
                            .click('.type-puzzle div:nth-child(2) button.btn.btn-puzzle')
                            .untilTime(1500);

                    } else if (value === 'Which major US city is located 14km southeast of the Cardinals\' stadium?'){
                        return self
                            .click('.type-puzzle div:nth-child(1) button.btn.btn-puzzle')
                            .untilTime(1000)
                            .click('.type-puzzle div:nth-child(2) button.btn.btn-puzzle')
                            .untilTime(1500);

                    } else if (value === 'How many players from each team are allowed on an NFL field at any one time?'){
                        return self
                            .click('.type-puzzle div:nth-child(1) button.btn.btn-puzzle')
                            .untilTime(1000)
                            .click('.type-puzzle div:nth-child(2) button.btn.btn-puzzle')
                            .untilTime(1500);

                    } else if (value === 'How many points are awarded for a Field Goal?'){
                        return self
                            .click('.type-puzzle div:nth-child(1) button.btn.btn-puzzle')
                            .untilTime(1000)
                            .click('.type-puzzle div:nth-child(2) button.btn.btn-puzzle')
                            .untilTime(1500);
                    }
                }).then(function () {

                    return true;
                })

            })

            .click('.btn.btn-primary.btn-submit')
            .untilTime(1500)
            .call(done);
    });

    it('Choosing incorrect letterss in round 4', function(done) {
        browser
            .untilTime(4000)
            .waitUntil(function() {
                var self = this;


                return this.getText('.indent h2').then(function (value) { //getting text of answer
                    console.log(value);

                    if (value === 'How many points are awarded for a touchdown?'){ //depending on question clicking on incorrect letters (always 2 first letters)
                        return self
                            .click('.type-puzzle div:nth-child(4) button.btn.btn-puzzle')
                            .untilTime(1000)
                            .click('.type-puzzle div:nth-child(6) button.btn.btn-puzzle')
                            .untilTime(1500);

                    } else if (value === 'Which major US city is located 14km southeast of the Cardinals\' stadium?'){
                        return self
                            .click('.type-puzzle div:nth-child(3) button.btn.btn-puzzle')
                            .untilTime(1000)
                            .click('.type-puzzle div:nth-child(7) button.btn.btn-puzzle')
                            .untilTime(1500);

                    } else if (value === 'How many players from each team are allowed on an NFL field at any one time?'){
                        return self
                            .click('.type-puzzle div:nth-child(2) button.btn.btn-puzzle')
                            .untilTime(1000)
                            .click('.type-puzzle div:nth-child(4) button.btn.btn-puzzle')
                            .untilTime(1500);

                    } else if (value === 'How many points are awarded for a Field Goal?'){
                        return self
                            .click('.type-puzzle div:nth-child(6) button.btn.btn-puzzle')
                            .untilTime(1000)
                            .click('.type-puzzle div:nth-child(1) button.btn.btn-puzzle')
                            .untilTime(1500);
                    }
                }).then(function () {

                    return true;
                })

            })

            .click('.btn.btn-primary.btn-submit')
            .untilTime(10000)
            .call(done);
    });

    it('Choosing correct letters in round 5', function(done) {
        browser
            .waitForVisible(".indent")
            .untilTime(2000)
            .click('.type-puzzle div:nth-child(5) button.btn.btn-puzzle')
            .untilTime(1000)
            .click('.type-puzzle div:nth-child(4) button.btn.btn-puzzle')
            .untilTime(1000)
            .click('.type-puzzle div:nth-child(2) button.btn.btn-puzzle')
            .untilTime(1000)
            .click('.btn.btn-primary.btn-submit')
            .untilTime(1500)
            .call(done);
    });

    it('Skipping submission form', function(done) {
        browser
            .untilTime(5000)
            .waitForVisible("div.shield")
            .frame('submissionFrame_1')
            .click('.formRowButtonType_cancel')
            .untilTime(5000)
            .call(done);
    });

    it('Skipping share screen', function(done) {
        browser
            .untilTime(1000)
            .waitForVisible("div.indent")
            .click('button.btn.btn-default.confirm-store.btn-restart')
            .untilTime(3000)
            .call(done);
    });

});


