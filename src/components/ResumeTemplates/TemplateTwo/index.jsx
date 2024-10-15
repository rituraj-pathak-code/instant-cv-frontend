import { FaGithub } from "react-icons/fa";
import { useResumeInfo } from "../../../contexts/ResumeInfoContext";
import { useCallback, useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import {reorder } from "../../../config/util";
import { getResumeUIArray2 } from "../../../config/uiUtils";


const Template2 = () => {
  const { personalInfo, education, skills, experience, projects } = useResumeInfo();
  const [items, setItems] = useState([]);

  const onDragEnd = useCallback(
    (result) => {
      if (!result.destination) {
        return;
      }
      const reorderedItems = reorder(
        items,
        result.source.index,
        result.destination.index
      );
      console.log(reorderedItems);

      setItems(reorderedItems);
    },
    [items]
  );

  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    padding: "0.02px",
    background: isDragging ? "lightgreen" : "",
    ...draggableStyle,
  });


  useEffect(() => {
    setItems(
      getResumeUIArray2(education, skills, experience, projects)
    );
  }, [education, skills, experience, projects]);


  return (
    <div className="min-h-[83vh] shadow py-4 px-4 text-xs w-[500px] bg-white">

      <div className="mb-[5px] flex items-center justify-between">
        <div>
        <h2 className="font-extrabold text-xl text-nowrap text-left text-[#0845A4]">
          {personalInfo?.firstName} {personalInfo?.lastName}
        </h2>
        {personalInfo?.phone && personalInfo?.email && (
          <p className="text-left my-[3px]">
            {personalInfo?.phone} / {personalInfo?.email}
          </p>
        )}
        </div>
        <div className="flex justify-center flex-col text-[10px]">
          {personalInfo?.github && (
            <a
              href={personalInfo?.github}
              className=" text-blue-700"
              target="_blank"
            >
              <span>Github</span>
            </a>
          )}
          {personalInfo?.linkedin && (
            <a
              href={personalInfo?.linkedin}
              className=" text-blue-700"
              target="_blank"
            >
              <span>Linkedin</span>
            </a>
          )}
          {personalInfo?.portfolio && (
            <a
              href={personalInfo?.portfolio}
              className=" text-blue-700"
              target="_blank"
            >
              <span>Portfolio</span>
            </a>
          )}
          {personalInfo?.leetcode && (
            <a
              href={personalInfo?.leetcode}
              className=" text-blue-700"
              target="_blank"
            >
              <span>Leetcode</span>
            </a>
          )}
        </div>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" isCombineEnabled={false}>
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ background: snapshot.isDraggingOver ? "lightblue" : "" }}
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Template2;
