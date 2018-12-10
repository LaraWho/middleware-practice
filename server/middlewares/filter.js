let notAllowed = ['butt', 'poop', 'idiot'];
let holidays = ['Christmas', 'christmas', 'xmas', 'x-mas'];
let textInput = [];

module.exports = {
  
    filterStuff(req, res, next) {
            while ( notAllowed.find( word => req.body.text.includes(word) ) ) {
                const badWord = notAllowed.find( word => req.body.text.includes(word) );
                req.body.text = req.body.text.replace( badWord, '*'.repeat( badWord.length ) );
              }
      next();
},

    changeHoliday(req, res, next) {
        while ( holidays.find( word => req.body.text.includes(word) ) ) {
            const holiday = holidays.find( word => req.body.text.includes(word) );
            req.body.text = req.body.text.replace( holiday, 'happy holidays!');
          }
          next();
    },

    textPusher: (req, res) => {
        const text = req.body
        textInput.push(text)
        res.send(textInput)
    }
}