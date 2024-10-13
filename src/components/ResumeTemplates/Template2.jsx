import { FaGithub } from "react-icons/fa";
import { useResumeInfo } from "../../contexts/ResumeInfoContext";
import { useCallback, useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import {reorder } from "../../config/util";
import { getResumeUIArray } from "../../config/uiUtils";


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
      getResumeUIArray(education, skills, experience, projects)
    );
  }, [education, skills, experience, projects]);


  return (
    <div className="min-h-[83vh] shadow py-6 px-4 text-xs w-[500px] bg-white">

      <div className="mb-[5px]">
        <h2 className="font-bold text-lg text-center">
          {personalInfo?.firstName} {personalInfo?.lastName}
        </h2>
        {personalInfo?.phone && personalInfo?.email && (
          <p className="text-center my-[3px]">
            {personalInfo?.phone} / {personalInfo?.email}
          </p>
        )}
        <div className="flex justify-center items-center gap-4">
          {personalInfo?.github && (
            <a
              href={personalInfo?.github}
              className="flex justify-center items-center gap-2 text-blue-900"
              target="_blank"
            >
              <FaGithub />
              <span>GITHUB</span>
            </a>
          )}
          {personalInfo?.linkedin && (
            <a
              href={personalInfo?.linkedin}
              className="flex justify-center items-center gap-2 text-blue-900"
              target="_blank"
            >
              <FaGithub />
              <span>LINKEDIN</span>
            </a>
          )}
          {personalInfo?.portfolio && (
            <a
              href={personalInfo?.portfolio}
              className="flex justify-center items-center gap-2 text-blue-900"
              target="_blank"
            >
              <FaGithub />
              <span>PORTFOLIO</span>
            </a>
          )}
          {personalInfo?.leetcode && (
            <a
              href={personalInfo?.leetcode}
              className="flex justify-center items-center gap-2 text-blue-900"
              target="_blank"
            >
              <FaGithub />
              <span>LEETCODE</span>
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
