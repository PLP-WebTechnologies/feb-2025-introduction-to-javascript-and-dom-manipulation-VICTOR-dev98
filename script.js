document.addEventListener('DOMContentLoaded', () => {
    const changeTextButton = document.getElementById('changeTextButton'); 
    const toggleElementButton = document.getElementById('toggleElementButton'); 
    const dynamicText = document.getElementById('dynamicText');
    const changeStyleButton = document.getElementById('changeStyle');
    const addElementButton = document.getElementById('addElement');
    const removeElementButton = document.getElementById('removeElement');
    const container = document.getElementById('elementContainer');

    changeTextButton.addEventListener('click', () => {
        dynamicText.textContent = 'Text has been changed!';
    });

    toggleElementButton.addEventListener('click', () => {
        if (dynamicText.style.display === 'none') {
            dynamicText.style.display = 'block';
        } else {
            dynamicText.style.display = 'none';
        }
    });

    changeStyleButton.addEventListener('click', () => {
        dynamicText.style.color = 'blue';
        dynamicText.style.fontSize = '24px';
    });

    addElementButton.addEventListener('click', () => {
        const newElement = document.createElement('p');
        newElement.textContent = 'A new paragraph has been added!';
        container.appendChild(newElement);
    });

    removeElementButton.addEventListener('click', () => {
        const paragraphs = container.getElementsByTagName('p');
        if (paragraphs.length > 0) {
            container.removeChild(paragraphs[paragraphs.length - 1]);
        } else {
            alert('No elements to remove!');
        }
    });
});