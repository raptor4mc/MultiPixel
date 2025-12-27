function initSidebar() {
    document.getElementById('search-files').oninput = (e) => {
        const query = e.target.value;
        const files = Object.keys(window.multiRaptorCurrentRepo.files).filter(f => f.includes(query));
        document.getElementById('files-list').innerHTML = files.map(f => `<div class="file-item repo-item" onclick="openFile('${f}')">${f}</div>`).join('');
    };
}
