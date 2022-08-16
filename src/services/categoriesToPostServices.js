const categoryPostDB = require("../db/categoryPostDB");

const categoryPost = async (category, post_id)=>{
    console.log(category, post_id)
    const categoryOrPostDB= categoryPostDB.categoryToPost(category, post_id)
    return categoryOrPostDB
}

module.exports = {categoryPost}