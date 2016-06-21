describe( 'webdriver.io page', function() {

    it('should have the right title', function (done) {

        browser
            .url('/')
            .getTitle().then(function (title) {
                console.log(title);
            })
            .call(done);
    });


/*

    it('loading app and answer incorrect on 1st question', function (done) {
        browser
            .waitForVisible(".view-trivia-on-demand")
            .click('.row.type-grid div:nth-child(2) button')
            .click('.view-button')
            .call(done);
    })

    it('2nd question', function (done) {
        browser
            .waitForVisible(".view-voteable.view-quiz.view-multi-select")
            .click('.row.type-grid div:nth-child(3) button')
            .click('.view-button')
            .call(done);
    })

    it('3nd question', function (done) {
        browser
            .waitForVisible('.view-voteable.view-quiz.view-trivia-on-demand.special-layout')
            .click('.row.type-grid div:nth-child(2) button')
            .click('.view-button')
            .call(done);
    })
*/
    it('4nd question', function (done) {
        browser
            .waitForVisible('div.view-voteable.view-quiz.view-drag-and-drop-quiz.view-association-quiz.with-hint')
            .dragAndDrop('button#view78.btn.btn-lg.btn-block','button#view81.btn.btn-lg.btn-block')
            .call(done);
    })

    it('5nd question', function (done) {
        browser
            .waitForVisible('div.view-voteable.view-quiz.view-drag-and-drop-quiz.view-association-quiz.with-hint')
            .dragAndDrop('button#view141.btn.btn-lg.btn-block','button#view144.btn.btn-lg.btn-block')
            .click('.view-button')
            .call(done);
    })




    })
