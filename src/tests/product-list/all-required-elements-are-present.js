module.exports = {
  'table header elements are visible': function (browser) {
    const productList = browser.page.product_list();
    productList
      .navigate()
    const productListTableHeader = productList.section.productListTable.section.header;
    browser
      .waitForElementVisible('table.v-table', 2000)
    productListTableHeader.expect.element('@idColumn').to.be.visible
    productListTableHeader.expect.element('@nameColumn').to.be.visible
    productListTableHeader.expect.element('@descriptionColumn').to.be.visible
    productListTableHeader.expect.element('@actionsColumn').to.be.visible
  },

  'table footer elements are visible': function (browser) {
    browser
      .assert.visible('div.v-select__slot')
      .assert.visible('[role="combobox"] div')
  },

  'button Create is visible': function (browser) {
    const productList = browser.page.product_list();
    productList
      .assert.visible('@btnCreate')
      .assert.containsText('@btnCreate', 'CREATE')
      .end();
  }
};