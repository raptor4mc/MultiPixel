#menu-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    gap: 40px;
    transition: transform 0.3s ease;
}

.menu-card {
    width: 200px;
    height: 260px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px) saturate(180%);
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    color: white;
    user-select: none;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.menu-card:hover {
    transform: scale(1.05);
}
