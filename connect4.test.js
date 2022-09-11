describe('makeBoard test', function() {
    it('should create rows of arrays with values of null and correct length based on HEIGHT and WIDTH', function(){
        for (let y = 0; y < HEIGHT; y++) {
            //iterate over each row
            for (let x = 0; x < WIDTH; x++) {
                //check value at location to be set to null
            expect(board[y][x]).toEqual(null);
            }
        expect(board[y].length).toEqual(7);
        }
    }) 
})

describe('makeHtmlBoard test', function (){
    it('should append top row to the html board element with an appended td', function() {
        //check for tr
        expect(document.querySelector("#column-top")).toBeDefined();
        //check for td
        expect(document.querySelector("#column-top td")).toBeDefined();
    })

    it('should create rows and append to htmlBoard', function() {
        //check for tr
        expect(document.querySelector("#board tr")).toBeDefined();
        //check for td
        expect(document.querySelector("#board tr td")).toBeDefined();
    })
})

describe('findSpotForCol test', () => { 
    it('should return first empty spot in column', () => {
        expect(findSpotForCol(0)).toEqual(0);
        expect(findSpotForCol(1)).toEqual(0);
        expect(findSpotForCol(2)).toEqual(0);
        expect(findSpotForCol(3)).toEqual(0);
        expect(findSpotForCol(4)).toEqual(0);
        expect(findSpotForCol(5)).toEqual(0);
        expect(findSpotForCol(6)).toEqual(0);
    })
 })


 describe('placeInTable tests', () => {
    //fill the board with pieces
    for(let y = 0; y < HEIGHT; y++){
        for(let x = 0; x < WIDTH; x++){
            placeInTable(y,x);
        }
    }
    //check a cell for div containing the proper class list
    it('should place a div on the board with class of "piece p1"', () => {
        expect(document.querySelector("#board").rows[HEIGHT].cells[0].children[0].classList).toContain('piece', 'p1');
    })
 })



 afterAll(function() {
    // teardown logic

    //remove all div elements from the board after tests are run
    for(let y = 0; y < HEIGHT+1; y++){
        for(let x = 0; x < WIDTH; x++){
            document.querySelector("#board").rows[y].cells[x].innerHTML = null;
        }
        document.querySelector("#board").rows[y].cells[y].innerHTML = null;
    }
});