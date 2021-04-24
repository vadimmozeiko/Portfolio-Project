function renderProjects(data) {
    //input validation
    if (typeof data !== 'object' ||
        Array.isArray(data)) {
        return 'Invalid data format';
    }
    const allowedKeys = ['selector', 'items'];
    const keys = Object.keys(data);
    if (keys.length !== 2) {
        return 'Object keys missing';
    }

    for (const key of keys) {
        if (!allowedKeys.includes(key)) {
        return `Unknown key "${key}"`;
        }
    }

    //logic
    const validSelector = 'projects';
    const isValidSelector = data.selector === validSelector ? data.selector : false;
    const projectData = data.items;
    
    const DOM = document.getElementById(isValidSelector);
    let HTML = '';
    
    
    for (const dataItem of projectData){
      HTML +=  `<div class="project-box">
        <img src="${dataItem.image}" alt="project image">
        <h3 class="project-title">${dataItem.title}</h3>
        <p class="project-desc">${dataItem.text}</p>
        <p class="project-lang">${dataItem.category}</p>
        </div>`
    };
        
    //post validation
    if (HTML === ''){
        return 'No valid data was found.'
        }
    //return result
    DOM.innerHTML = HTML;
};  


export {renderProjects};