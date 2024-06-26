import { createContext } from 'react'
import { ModalSheetInternalContextType } from '../types'
import { SharedValue } from 'react-native-reanimated'

export const ModalSheetInternalContext = createContext<ModalSheetInternalContextType>({
  registerModal: () => {},
  updateY: () => {},
  addModalToStack: () => {},
  removeModalFromStack: () => {},
  activeIndex: { value: 0 } as SharedValue<number>,
  modalStack: [],
  minimumHeight: { value: 0 } as SharedValue<number>,
  backdropColor: { value: 'black' } as SharedValue<string>,
  backdropOpacity: { value: 0.3 } as SharedValue<number>,
  updateModalHeight: () => {},
  registerDrawerSheet: () => {},
  addDrawerSheetToStack: () => {},
  removeDrawerSheetFromStack: () => {},
  drawerActiveIndex: { value: 0 } as SharedValue<number>,
  drawerSheetStack: [],
})
