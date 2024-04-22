const exerciseRoute = require('./routes/exercise');

function router(app){

    app.use('/exercise', exerciseRoute)
    
    app.get('/', (req, res)=>{
        res.json({
            message: 'app connected successfully'
        })
    })

    app.use((req, res)=>{
        res.status(404).json({
            message: "resource not found"
        })
    })

}

module.exports = router;