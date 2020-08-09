<template>
  <div id="modalinsert-component">
    <Button
      type="info"
      @click="modal1 = true"
      class="btn"
      size="large"
      shape="circle"
      icon="ios-color-wand-outline"
      >Create User</Button
    >
    <Modal v-model="modal1" title="" :footer-hide="footerHide">
      <!--  -->
      <br />
      <Form
        ref="membervalidate"
        :model="membervalidate"
        :rules="ruleValidate"
        label-position="left"
      >
        <!-- Frist Name -->
        <FormItem label="Frist Name" prop="name">
          <Input v-model="membervalidate.name" placeholder="Enter your firstname" text />
        </FormItem>

        <!-- Last Name -->
        <FormItem label="Frist Name" prop="name2">
          <Input
            v-model="membervalidate.name2"
            placeholder="Enter your lastname"
            required="required"
          />
        </FormItem>

        <!-- Email -->
        <FormItem label="E-mail" prop="email">
          <Input v-model="membervalidate.email" placeholder="Enter your e-mail" />
        </FormItem>

        <!-- Phone -->
        <FormItem label="Phone" prop="phone">
          <Input
            v-model="membervalidate.phone"
            maxlength="11"
            show-word-limit
            placeholder="Enter your Phone Number"
          />
        </FormItem>

        <!-- Age -->
        <FormItem label="Age" prop="age">
          <Input
            v-model="membervalidate.age"
            placeholder="Enter your name"
            maxlength="3"
            minlength="1"
            type="number"
          ></Input>
        </FormItem>

        <!-- Address -->
        <FormItem label="Address" prop="address">
          <Input v-model="membervalidate.address" placeholder="Enter your address"></Input>
        </FormItem>

        <!-- EVENT -->
        <FormItem>
          <Button type="primary" @click="handleOK('membervalidate')">Create User</Button>
          <Button @click="handleCancel('membervalidate')" style="margin-left: 8px">Reset</Button>
        </FormItem>
      </Form>

      <!--  -->
    </Modal>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import db from "@/db";

export default {
  name: "modalinsert-component",
  data() {
    // eslint-disable-next-line consistent-return
    //  const validateName = (rule, value, callback) => {
    //    if (!value) {
    //      return callback(new Error("Age cannot be empty"));
    //    }

    //    setTimeout(() => {
    //      callback();
    //    }, 1000);
    //  };
    const validateEmail = (rule, value, callback) => {
      const regex = /\S+@\S+\.\S+/;
      if (regex.test(value)) {
        callback();
      } else {
        callback(new Error("Please enter your Email Format "));
      }
    };
    return {
      modal1: false,
      footerHide: true,
      membervalidate: {
        name: "",
        name2: "",
        phone: "",
        age: 0,
        address: "",
        id: "",
        email: ""
      },
      member: {
        first_name: "",
        last_name: "",
        phone: "",
        age: 0,
        address: "",
        id: "",
        email: ""
      },
      mail: "",
      ruleValidate: {
        name: [{ required: true, message: "The Frist name cannot be empty", trigger: "blur" }],
        name2: [{ required: true, message: "The Last name cannot be empty", trigger: "blur" }],
        email: [{ required: true, validator: validateEmail, trigger: "blur" }],
        phone: [{ required: true, message: "The Phone cannot be empty", trigger: "blur" }],
        age: [{ required: true, message: "The age cannot be empty", trigger: "blur" }],
        mail: [
          { required: true, message: "Mailbox cannot be empty", trigger: "blur" },
          { type: "email", message: "Incorrect email format", trigger: "blur" }
        ],
        address: [{ required: true, message: "The address cannot be empty", trigger: "blur" }]
      }
    };
  },
  methods: {
    handleOK(name) {
      this.member = { ...this.member, ...this.membervalidate };
      this.member.first_name = this.membervalidate.name;
      this.member.last_name = this.membervalidate.name2;

      this.member.id = uuidv4();

      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
          this.saveData();
          this.modal1 = false;
          this.$refs[name].resetFields();
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleCancel(name) {
      this.$Message.info("Clicked cancel");
      this.$refs[name].resetFields();
    },
    saveData() {
      db.collection("users")
        .doc(this.member.id)
        .set(this.member)
        .then(() => {
          this.$Message.success("Create User Success");
          this.fetchData();
        })
        .catch(() => {
          this.$Message.error("Create User fails");
        });
    },
    async fetchData() {
      const snapshot = await db.collection("users").get();
      const collection = await snapshot.docs.map(doc => doc.data());
      await this.$store.dispatch("setUsers", collection);
      this.updateCard();
    },
    updateCard() {
      this.$emit("updateCard");
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  font-weight: bold;
}
</style>
