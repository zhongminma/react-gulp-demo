var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
    searchItems: function(item) {
        console.log('actions', item.title);
        AppDispatcher.handleViewAction({
            actionType: AppConstants.SEARCH_ITEMS,
            item: item
        });
    }
}

module.exports = AppActions;