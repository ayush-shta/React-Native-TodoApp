let RealmUtils = {
    getMaxIdForPrimaryKey(todoList) {
        let maxId = todoList.max("id");

        console.log("maxId:", maxId);
        if (maxId == null || maxId == undefined) {
            return 0;
        }
        return maxId;
    }
}

export default RealmUtils;