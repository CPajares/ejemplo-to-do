import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateForm from "./CreateForm";

describe("Given a CreateForm component", () => {
  describe("When it´s called", () => {
    test("Then it should render a button CREAR and has to be dissabled", async () => {
      render(<CreateForm></CreateForm>);

      const button = await screen.findByRole("button", { name: "CREAR" });

      expect(button).toBeInTheDocument();
      expect(button).toBeDisabled();
    });
  });
  describe("When it´s rendered and all the fields of the form were filled up", () => {
    test("Then the button CREAR shouldn´t be dissabled", async () => {
      render(<CreateForm></CreateForm>);

      const button = await screen.findByRole("button", { name: "CREAR" });
      const nombreInput = await screen.findByPlaceholderText("Tarea");
      const descriptionInput = await screen.findByPlaceholderText(
        "Descripción"
      );
      const dateInput = await screen.findByPlaceholderText("dd/mm/aaaa");

      userEvent.type(nombreInput, "nombre tarea");
      userEvent.type(descriptionInput, "descripcion tarea");
      fireEvent.change(dateInput, { target: { value: "2020-01-02" } });
      userEvent.selectOptions(
        screen.getByRole("combobox"),
        screen.getByRole("option", {
          name: "Ocio",
        })
      );

      expect(button).not.toBeDisabled();
    });
  });
});
