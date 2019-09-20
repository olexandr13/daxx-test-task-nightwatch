module.exports = {
  'add new product': function (browser) {
    const productList = browser.page.product_list();
    productList
      .navigate()
      .waitForElementVisible('@btnCreate', 2000)
      .click('@btnCreate')
      .setValue('@productNameInput', 'product 1 name')
      .setValue('@productDescriptionInput', 'product 1 description')
      .click('@btnSubmit')
      .waitForElementVisible('@successMessage', 1000)
  },

  'new product is present in the list': function (browser) {
    const productList = browser.page.product_list();
    productList.expect.section('@productListTable').to.be.visible
    const productListTable = productList.section.productListTable
    productListTable.expect.element('@productName').to.be.visible
    productListTable.expect.element('@productDescription').to.be.visible
  }
};