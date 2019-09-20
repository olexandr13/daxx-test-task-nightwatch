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
    const productListTable = productList.section.productListTable;
    productListTable.expect.element('@productName').text.to.equal('product 1 name')
    productListTable.expect.element('@productDescription').text.to.equal('product 1 description')
  },

  'update product info': function (browser) {
    const productList = browser.page.product_list();
    const updateProduct = browser.page.create_update_product();
    const productListTable = productList.section.productListTable;
    productListTable
      .click('@btnUpdate')

    updateProduct
      .waitForElementVisible('@productNameInput', 2000)
      // clear value
      .setValue('@productNameInput', ['', [browser.Keys.CONTROL, "a"]])
    browser
      .keys('\uE017')
    updateProduct
      .setValue('@productNameInput', 'new name')
      // clear value
      .setValue('@productDescriptionInput', ['', [browser.Keys.CONTROL, "a"]])
    browser
      .keys('\uE017')
    updateProduct
      .setValue('@productDescriptionInput', 'new description')
      .click('@btnSave')
  },

  'product is displayed with updated info': function (browser) {
    browser
      .waitForElementVisible('tbody td:nth-child(2)', 2000)
      .assert.containsText('tbody td:nth-child(2)', 'new name')
      .assert.containsText('tbody td:nth-child(3)', 'new description')
  },
};