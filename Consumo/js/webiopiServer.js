webiopi().ready(init);
        
        // defines function passed previously to webiopi().ready()
        function init() {
                // automatically refresh UI each seconds
                setInterval(updateUI, 1000);
        }

        // function called through setInterval
        function updateUI() {
                // call getSensor macro for Arduino analog channel 0-3
                webiopi().callMacro("getSensor", 0, sensorCallback);
                webiopi().callMacro("getSensor", 1, sensorCallback);
                webiopi().callMacro("getSensor", 2, sensorCallback);
                webiopi().callMacro("getSensor", 3, sensorCallback);
        }       

        // callback function used to display sensor data
        function sensorCallback(macroName, channel, data) {
                // use jQuery to change spans content
                $("#sensor"+channel).text(data);
        }