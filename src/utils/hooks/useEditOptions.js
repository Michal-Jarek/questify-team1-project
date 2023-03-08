import { useState } from 'react';

export const useEditOptions = (difficulty = 'Normal', category = 'Stuff') => {
    const [anchorDifficulty, setAnchorDifficulty] = useState(null);
    const [anchorCategory, setAnchorCategory] = useState(null);
    const [selectedDifficulty, setSelectedDifficulty] = useState(difficulty);
    const [selectedCategory, setSelectedCategory] = useState(category);

    const isDifficultyMenuOpen = Boolean(anchorDifficulty);
    const isCategoryMenuOpen = Boolean(anchorCategory);

    const openDifficultyMenu = (e) => setAnchorDifficulty(e.currentTarget);
        
    const openCategoryMenu = (e) => setAnchorCategory(e.currentTarget);

    const selectDifficulty = (e) => {
        e.currentTarget.innerText === ''
            ? setSelectedDifficulty(selectedDifficulty)
            : setSelectedDifficulty(e.currentTarget.innerText);
        
        setAnchorDifficulty(null);
    };

    const selectCategory = (e) => {
        e.currentTarget.innerText = ''
            ? setSelectedCategory(selectCategory)
            : setSelectedCategory(e.currentTarget.innerText);
        
        setAnchorCategory(null)
    };

    return {
        anchorDifficulty,
        anchorCategory,
        selectDifficulty,
        selectCategory,
        isDifficultyMenuOpen,
        isCategoryMenuOpen,
        openDifficultyMenu,
        openCategoryMenu,
        selectedDifficulty,
        selectedCategory
    };
};