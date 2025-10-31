function drawLine({ctx, start, end, width = 1, color = 'black'}) {
    ctx.strokeStyle = color
    ctx.lineWidth = width
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
}

export { drawLine }