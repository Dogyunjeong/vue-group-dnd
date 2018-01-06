# Group drag and drop
It is for the multiple drag and drop layout.
Current drag and drop libraries are not restricted by group or not allowed to move to another dnd layer.
This component will allow to control dnd layer. It can be dragged and dropped to other layout or not by setting.

# Usage
`<Drag-and-Drop v-modle="list" group="">`
`   <dragged-list v-for="(item, idx) in list" idx="idx"/>  `
`</Drag-and-Drop>`

### group
If not set the group directive, It will set as default.
If set the group, only the item can be droppable in same group dnd layout.
#### example
there are 4 layer with group="kanban" and each kanban has a layer with group="task"

Any Item in layers with group="task" can be droppable in any layers with group="task".
But any Item in task layer can't be droppable in any kanban layer.


### idx and draggable item.
Draggable item must has idx contribute.
* Currently draggable Item must be as a vue component.(It will be updated)

#Not yet tested



