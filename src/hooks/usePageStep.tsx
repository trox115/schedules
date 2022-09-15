import React, { useCallback } from 'react';
import { useContextSelector } from 'use-context-selector';
import { AppContext } from '../Context/App.context';

function UsePageStep() {
  const page = useContextSelector(AppContext, state => state.page);
  const setPage = useContextSelector(AppContext, state => state.setPage);
  const setDuration = useContextSelector(AppContext, state => state.setDuration);
  const setCurrentStep = useContextSelector(AppContext, state => state.setCurrentStep);

  const changeDuration = useCallback((newDuration) => {
    setDuration(newDuration);
    setCurrentStep(1)
  },[])

  const handlePageChange = useCallback((newPage) => {
    setPage(newPage);
  },[])

  return { handlePageChange, page, changeDuration }
}

export default UsePageStep
