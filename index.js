module.exports = () => {
    const value1 = Math.floor(Math.random()*151);
    const value2 = Math.floor(Math.random()*151);

    const url = `https://images.alexonsager.net/pokemon/fused/${value1}/${value1}.${value2}.png`;

    return url;
}