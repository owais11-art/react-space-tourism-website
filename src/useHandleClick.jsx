export const useHandleClick = (state, setState) => {
    return id => {
        const newState = state.map(stateItem => stateItem.id === id ? 
                                    {...stateItem, active: true} : 
                                    stateItem.active ? 
                                    {...stateItem, active: false} :
                                    stateItem
                                  )
          setState(newState)
    }
}