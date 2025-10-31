function drawLine({ctx, x0, y0, x1, y1, width = 1, color = 'black'}) {
    ctx.strokeStyle = color
    ctx.lineWidth = width
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.stroke();
}

export { drawLine }