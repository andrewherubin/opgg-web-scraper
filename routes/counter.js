/*
** Route to handle champion counter picks
*/

const Express = require('express')
const Puppeteer = require('puppeteer')

const router = Express.Router()

router.get('/:name', async (req, res) => {
    try {
        // navigate to counters page for selected champion
        const browser = await Puppeteer.launch({ headless: false })
        const page = await browser.newPage()
        await page.goto('https://www.op.gg/champions/'+req.params.name, { waitUntil: "domcontentloaded" })
        let url = page.url()
        url = url.substring(0, url.length-5) + 'counters'
        await page.goto(url)

        /*
            TODO: Scrape Data
                current page is the counters page for the desired champion
                scrape winrates and champion name
                select ideal matchups
        */

        res.send('Hello World!')
        await browser.close()
    } catch(err) { console.log(err) }
})

module.exports = router