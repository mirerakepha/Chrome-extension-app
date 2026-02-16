

chrome.runtime.onMessage.addListener(data => {

    const {event, prefs} = data

    switch (event) {
        case 'onstop':
            handleOnStop();
            break;
        case 'onStart':
            handleOnStart(prefs);
            break;
        default:
            break;
    }
})


const handleOnStop = () => {
    console.log("on stop in background")
}


const handleOnStart = (prefs) => {
    console.log("Start running in background")
    console.log("Prefs received", prefs)

    chrome.storage.local.set(prefs)
}