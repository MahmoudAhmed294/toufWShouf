export const container={
    MuiContainer:{
        styleOverrides: {
            root : ({ ownerState }) => ({
              ...(ownerState.maxWidth === 'lg' && {
                maxWidth:"1350px !important"
              }

                ),
            }),
        }
}
}