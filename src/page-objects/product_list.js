const productListCommands = {
  addNewProduct: function () {
    return this.waitForElementVisible('@btnCreate', 2000)
        .click('@btnCreate')
        .setValue('@productNameInput', 'product 1 name')
        .setValue('@productDescriptionInput', 'product 1 description')
        .click('@btnSubmit')
        .waitForElementVisible('@successMessage', 1000)
  }
};

module.exports = {
  commands: [productListCommands],
  url: 'http://localhost:8080/products',
  elements: {
    btnCreate: {
      selector: '[href="/products/create"] div'
    },
    productNameInput: {
      selector: 'input[aria-label="Name"]'
    },
    productDescriptionInput: {
      selector: 'input[aria-label="Description"]'
    },
    btnSubmit: {
      selector: 'button[type="submit"]'
    },
    successMessage: {
      selector: 'div.v-snack div.success'
    }
  },
  sections: {
    productListTable: {
      selector: 'table.v-datatable',
      elements: {
        productName: {
          selector: 'tbody td:nth-child(2)'
        },
        productDescription: {
          selector: 'tbody td:nth-child(3)'
        },
        btnUpdate: {
          selector: 'a[href^="/products/update"]'
        }
      },
      sections: {
        header: {
          selector: 'thead',
          elements: {
            idColumn: {
              selector: '[aria-label^="ID"]'
            },
            nameColumn: {
              selector: '[aria-label^="Name"]'
            },
            descriptionColumn: {
              selector: '[aria-label^="Descriprion"]'
            },
            actionsColumn: {
              selector: '[aria-label^="Actions"]'
            }
          }
        }
      }
    }
  }
};