<img src="./example/assets/RocketSim_Recording_iPhone_13_Pro_6.1_2024-07-04_19.09.50.gif" height="450" />

## Installation

```bash
npm install @corasan/modal-sheet
yarn add @corasan/modal-sheet
bun add @corasan/modal-sheet
```

## Usage

First, wrap your application with the `ModalSheetProvider` component.

```tsx
import { ModalSheetProvider } from '@corasan/modal-sheet';

function App() {
  return (
    <ModalSheetProvider>
      <YourApp />
    </ModalSheetProvider>
  );
}
```

Use refs to expand and minimize the modal sheet.

```tsx
import { ModalSheetStackRef, ModalSheetStack } from '@corasan/modal-sheet';

function YourComponent() {
  const modalRef = useRef<ModalSheetStackRef>()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Butto title="Open Modal" onClick={() => modalRef.current.open())} />

      <ModalSheetStack ref={modalRef} name="modal-drawer">
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={{ fontWeight: "500", fontSize: 18 }}>Title</Text>
          </View>

          <View
            style={{
              paddingVertical: 40,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              title="Close Modal"
              onPress={() => {
                modalRef.current.dismiss();
              }}
            />
          </View>
        </View>
      </ModalSheetStack>
    </View>
  );
}
```

## Components

<!-- ### ModalSheet

The `ModalSheet` component is a modal sheet that can be expanded and minimized. It can be used to create a drawer-type of modal sheet and can be stacked on top of each other.

| Name | Type | Default  | Description | Required |
| --- | --- | --- | --- | --- |
| ref | React.RefObject\<ModalSheetRef> | - | Ref for the modal sheet | Yes |
| name | string | - | The name of the modal sheet | Yes |
| children | ReactNode | - | The children components | Kinda yeah |
| containerStyle | string | - | Styles for the modal sheet container | No |
| noHandle | boolean | false | Hide the handle | No |
| sizes | number[] | [100, 300, 600] | The sizes the modal can be expanded to | No |
| backdropColor | string | "black" | The color of the backdrop | No |
| backdropOpacity | number | 0.4 | The opacity of the backdrop | No |
| offset | number | 0 | Add an offset at the bottom of the modal sheet when it's minimized | No | -->
<!-- | disableSheetStackEffect | boolean | - | Disable sheet stack effect | No |
| onGestureUpdate | (e: GestureUpdateEvent\<PanGestureHandlerEventPayload>) => void| - | Custom callback to handle gesture updates | No |
| onGestureBegin | (e: GestureStateChangeEvent\<PanGestureHandlerEventPayload>) => void| - | Custom callback to handle on gesture begin | No |
| onGestureEnd | (e: GestureStateChangeEvent\<PanGestureHandlerEventPayload>) => void| - | Custom callback to handle on gesture end | No |
| onGestureStart | (e: GestureStateChangeEvent\<PanGestureHandlerEventPayload>) => void| - | Custom callback to handle on gesture start | No |
| onGestureFinalize | (e: GestureStateChangeEvent\<PanGestureHandlerEventPayload>) => void| - | Custom callback to handle on gesture finalize | No |
| onGestureTouchesDown | (e: GestureTouchEvent) => void| - | Custom callback to handle on gesture touch down | No |
| onGestureTouchesUp | (e: GestureTouchEvent) => void| - | Custom callback to handle on gesture touch up | No |
| onGestureTouchesMove | (e: GestureTouchEvent) => void| - | Custom callback to handle on gesture touch move | No |
| onGestureTouchesCancelled | (e: GestureTouchEvent) => void| - | Custom callback to handle on gesture touch cancelled | No | -->

### ModalSheetStack

The `ModalSheetStack` component is a modal sheet that can be opened and dismissed. It creates a modal sheet effect similar to the iOS modal sheet.


#### Props
| Name | Type | Default  | Description | Required |
| --- | --- | --- | --- | --- |
| ref | React.RefObject\<ModalSheetStackRef> | - | Ref for the modal sheet | Yes |
| name | string | - | The name of the modal sheet | Yes |
| children | ReactNode | - | The children components | Kinda yeah |
| containerStyle | string | - | Styles for the modal sheet container | No |
| noHandle | boolean | false | Hide the handle | No |
| onDismiss | () => void | - | Callback when the modal sheet is dismissed | No |
| enableDragToDismiss | boolean | true | Enable dragging to dismiss the modal sheet | No |
<!-- | backdropColor | string | "black" | The color of the backdrop | No |
| backdropOpacity | number | 0.4 | The opacity of the backdrop | No | -->

#### Methods

| Name | Type | Description |
| --- | --- | --- |
| open | () => void | Open the modal sheet |
| dismiss | () => void | Dismiss the modal sheet |


<!-- ## Hooks

### useModalSheet

> [!WARNING]
> This is a work in progress and not yet fully implemented/functional

| Name | Type | Description |
| --- | --- | --- |
| open | () => void | Open the modal sheet |
| dismiss | () => void | Dismiss the modal sheet |
| expand | (height?: number, disableSheetStack?: boolean) => void | expand to custom height |
| minimize | (height?: number) => void | Minimize to custom height | -->
