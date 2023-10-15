function convert() {
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const fromValue = parseFloat(document.getElementById("fromValue").value);
    let toValue;

    if (fromUnit === "meters" && toUnit === "feet") {
        toValue = fromValue * 3.28084;
    } else if (fromUnit === "meters" && toUnit === "inches") {
        toValue = fromValue * 39.3701;
    } else if (fromUnit === "feet" && toUnit === "meters") {
        toValue = fromValue / 3.28084;
    } else if (fromUnit === "feet" && toUnit === "inches") {
        toValue = fromValue * 12;
    } else if (fromUnit === "inches" && toUnit === "meters") {
        toValue = fromValue / 39.3701;
    } else if (fromUnit === "inches" && toUnit === "feet") {
        toValue = fromValue / 12;
    } else if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        toValue = (fromValue * 9/5) + 32;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        toValue = (fromValue - 32) * 5/9;
    } else if (fromUnit === "kilograms" && toUnit === "pounds") {
        toValue = fromValue * 2.20462;
    } else if (fromUnit === "pounds" && toUnit === "kilograms") {
        toValue = fromValue / 2.20462;
    } else {
        toValue = fromValue;
    }

    document.getElementById("toValue").value = toValue.toFixed(2);
}
