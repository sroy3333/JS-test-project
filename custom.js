let blogCount = 0;
let currentBlogPost = null;

function createBlogPost(imageUrl, title, description) {
    blogCount++;
    let blogPost = document.createElement('div');

    let img = document.createElement('img');
    img.src = imageUrl;
    blogPost.appendChild(img);

    let h2 = document.createElement('h2');
    h2.textContent = title;
    blogPost.appendChild(h2);

    let p = document.createElement('p');
    p.textContent = description;
    blogPost.appendChild(p);

    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function() {
        document.getElementById('imageUrl').value = img.src;
        document.getElementById('title').value = h2.textContent;
        document.getElementById('description').value = p.textContent;
        currentBlogPost = blogPost;
    };
    blogPost.appendChild(editButton);

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        blogPost.remove();
        blogCount--;
        updateBlogCount();
    };
    blogPost.appendChild(deleteButton);

    document.body.appendChild(blogPost);
    updateBlogCount();
}

function updateBlogCount() {
    let blogCountElement = document.getElementById('blogCount');
    blogCountElement.textContent = 'Total Blogs: ' + blogCount;
}

let postBlogButton = document.getElementById('postBlogButton');
postBlogButton.onclick = function() {
    let imageUrl = document.getElementById('imageUrl').value;
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    if (currentBlogPost) {
        currentBlogPost.remove();
        blogCount--;
    }
    createBlogPost(imageUrl, title, description);
    document.getElementById('imageUrl').value = '';
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    currentBlogPost = null;
};
