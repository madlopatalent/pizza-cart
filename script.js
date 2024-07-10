function pizzaCart() {
    return {
        largeCount: 0,
        mediumCount: 0,
        smallCount: 0,
        totalCost: 0,
        paymentAmount: 0,
        message: '',
        checkoutClicked: false,
        // get cartNotEmpty() {
        //     return this.largeCount > 0 || this.mediumCount > 0 || this.smallCount > 0;
        // },
        // get cartEmpty() {
        // return this.largeCount <= 0 || this.mediumCount <= 0 || this.smallCount <= 0;
        // },
        addPizza(size) {
            console.log("Adding {'size'} pizza");
            if (size === 'large') {
                this.largeCount++;
                this.totalCost += 140;
            }  if (size === 'medium') {
                this.mediumCount++;
                this.totalCost += 95;
            }  if (size === 'small') {
                this.smallCount++;
                this.totalCost += 30;
            }
        },

        removePizza(size) {
            if (size === 'large' && this.largeCount > 0) {
                this.largeCount--;
                this.totalCost -= 140;
            } if (size === 'medium' && this.mediumCount > 0) {
                this.mediumCount--;
                this.totalCost -= 95;
            } if (size === 'small' && this.smallCount > 0) {
                this.smallCount--;
                this.totalCost -= 30;
            }
        },

        checkout() {
            if (this.largeCount > 0 || this.mediumCount > 0 || this.smallCount > 0) {
                this.checkoutClicked = true;
            }
        },



        pay() {
            if (this.paymentAmount >= this.totalCost) {
                this.message = 'Enjoy your pizzas!';
                this.clearCart();
                this.paymentConfirmed = false; 
                setTimeout(() => {
                    this.message = '';
                }, 3000); 
            } else {
                this.message = 'Sorry - that is not enough money!';
                setTimeout(() => {
                    this.message = '';
                }, 8000); 
            }
        },


        clearCart() {
            this.largeCount = 0;
            this.mediumCount = 0;
            this.smallCount = 0;
            this.totalCost = 0;
            this.paymentAmount = 0;
        },
        

    };
}
