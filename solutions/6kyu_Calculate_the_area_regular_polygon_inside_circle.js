// It should calculate the area of a regular polygon of numberOfSides, 
// number-of-sides, or number_of_sides sides inside a circle of radius 
// circleRadius, circle-radius, or circle_radius which passes through 
// all the vertices of the polygon (such circle is called circumscribed 
// circle or circumcircle). The answer should be a number rounded to 3 decimal places.

function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
    let r = circleRadius;
    let n = numberOfSides;
    let radianFromDegree = ((360 / n) * Math.PI) / 180;
    let resFromFormula = (r * r) / 2 * n * Math.sin(radianFromDegree);

    return +resFromFormula.toFixed(3)
}
