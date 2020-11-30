const Game = {
    // test method: clickBrick
    clickBrick() {
        console.log('hurra');
    },

    convertField1d(field) {
        let convertedField = [];
        
        // convert 2d in 1d array
        field.map(rows => { 
            return rows.map(value => {
                return convertedField.push(value); 
            })
        })

        return convertedField;
    },

    convertField2d(field, col) {
        let convertedField = [];

        while(field.length) {
            convertedField.push(field.splice(0,col))
          };
          
        return convertedField;
    },

    sortField(field) {

        let sortedField = field.map(value => value);
        // sort array
        sortedField.sort((a, b) => {
            if (a > b) {
                return 1;
            } else if (a < b) {
                return -1;
            }
        });

        return sortedField;
    },

    validateMove(index, emptyIndex, col) {

        // if brick is next to empty brick: valid
        if (index === emptyIndex + 1) {
            return true;
        } else if (index === emptyIndex - 1) {
            return true;
        } else if (index === emptyIndex + col) {
            return true;
        } else if (index === emptyIndex - col) {
            return true;
        } else {
            return false;
        }
    },

    moveBrick(brick, field, col) {

        // find index of brick
        const convertedField = this.convertField1d(field);
        const index = convertedField.findIndex(value => value == brick);
 
        // find index of empty brick
        let max = Math.max.apply(null, convertedField);
        const emptyIndex = convertedField.findIndex(value => value == max);

        const isValid = this.validateMove(index, emptyIndex, col);

        // swap bricks
        if (isValid) {
            let temp = convertedField[index];
            convertedField[index] = convertedField[emptyIndex];
            convertedField[emptyIndex] = temp;
        }

        const result = this.convertField2d(convertedField, col);
        return result;
    },

    gameWon(field) {
        let checkField = this.convertField1d(field);
        let winField = this.sortField(checkField);
        
        // winning condition
        if (checkField.join() == winField.join() && checkField.join() != "") {
            return true;
        } else {
            return false;
        }
    }
}

export default Game;