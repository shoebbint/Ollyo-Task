import { useEffect, useState } from 'react';
import {
    DndContext,
    closestCenter,
    MouseSensor,
    TouchSensor,
    DragOverlay,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    rectSortingStrategy,
} from '@dnd-kit/sortable';

import { Grid } from '../Grid/Grid';
import { SortablePhoto } from '../../SortablePhoto/SortablePhoto';
import { Photo } from '../../Photo/Photo';
import photos from "../../../Photos.json";

const Gallery = () => {
    const [columns, setColumns] = useState(5); 
    const [selectedItems, setSelectedItems] = useState([]);

    useEffect(() => {
        function handleResize() {
           
            if (window.innerWidth >= 1200) {
                setColumns(5);
            } else if (window.innerWidth >= 992) {
                setColumns(4); 
            } else if (window.innerWidth >= 768) {
                setColumns(3); 
            } else {
                setColumns(1);
            }
        }

       
        window.addEventListener('resize', handleResize);
      
        handleResize();

       
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [items, setItems] = useState(photos);
    const [activeId, setActiveId] = useState(null);
    const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

    const handleSelectItem = (url) => {
        if (selectedItems.includes(url)) {
            setSelectedItems(selectedItems.filter(item => item !== url));
        } else {
            setSelectedItems([...selectedItems, url]);
        }
    };

    const handleDeleteSelected = () => {
        const updatedItems = items.filter(item => !selectedItems.includes(item));
        setItems(updatedItems);
        setSelectedItems([]);

    };

    return (
        <DndContext
        className="p-20"
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragCancel={handleDragCancel}
        >
            <SortableContext items={items} strategy={rectSortingStrategy}>
            <div className="w-9/12  mx-auto  px-10 mb-0 collapse-title text-xl font-medium flex justify-between">
                    <h1>     {selectedItems.length} Files are Selected</h1>
                    <button onClick={handleDeleteSelected} className="-mb-24 text-red-600 btn btn-outline btn-error">Delete Files</button>
                </div>
                <Grid  columns={columns}>

                    {items.map((url, index) => (
                        <div key={url} className="image-container">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedItems.includes(url)}
                                    onChange={() => handleSelectItem(url)}
                                    
                                />
                                <SortablePhoto
                                    className={`border-2  ${selectedItems.includes(url) ? 'border-blue-500' : ''}`}
                                    url={url}
                                    index={index}
                                />
                            </label>
                        </div>
                    ))}
                    <div>
                        <input type="file" name="" id="" />
                       
                    </div>
                </Grid>
            </SortableContext>

            <DragOverlay adjustScale={true}>
                {activeId ? (
                    <Photo className="border-4" url={activeId} index={items.indexOf(activeId)} />
                ) : null}
            </DragOverlay>
        </DndContext>
    );

    function handleDragStart(event) {
        setActiveId(event.active.id);
    }

    function handleDragEnd(event) {
        const { active, over } = event;

        if (active && over && active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.indexOf(active.id);
                const newIndex = items.indexOf(over.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }

        setActiveId(null);
    }

    function handleDragCancel() {
        setActiveId(null);
    }
};

export default Gallery;
