const awesomeFunction = (req, res, next) => {
    res.json('Awesome person');
};

const superAwesomeFunction = (req, res, next) => {
    res.json('SUPER Awesome person');
};

module.exports = { awesomeFunction, superAwesomeFunction };