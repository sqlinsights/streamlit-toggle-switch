# streamlit_toggle_switch

Creates a toggle switch with color and placement customizations. 

![filtering](https://github.com/sqlinsights/streamlit-toggle-switch/blob/main/sample.gif?raw=true)

---


---
## Installation
```shell
pip install streamlit_toggle_switch
```
## Usage

```python
import streamlit as st
import  streamlit_toggle_switch  as svs

sts.st_toggle_switch(label="Label", 
                    key="Key1", 
                    default_value=False, 
                    label_after = False, 
                    inactive_color = '#D3D3D3', 
                    active_color="#11567f", 
                    track_color="#29B5E8"
                    )
```