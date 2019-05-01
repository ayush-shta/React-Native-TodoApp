let RealmUtils = {
    getMaxIdForPrimaryKey(todoList) {
        let maxId = todoList.max("id");
        if (maxId == null || maxId == undefined) {
            return 0;
        }
        return maxId;
    }
}

export default RealmUtils;