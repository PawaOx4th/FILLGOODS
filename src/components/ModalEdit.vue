<template>
  <div id="modaledit-component">
    <Button type="primary" @click="modal1 = true">EDIT</Button>
    <Modal v-model="modal1" title="" @on-ok="handleOK" @on-cancel="handleCancel">
      <!--  -->
      <br />
      <Form ref="member" :model="member" :rules="ruleValidate" :label-width="100">
        <!-- Frist Name -->
        <FormItem label="Frist Name" prop="firstname">
          <Input v-model="member.first_name" placeholder="Enter your Frist name"></Input>
        </FormItem>

        <!-- Last Name -->
        <FormItem label="Last Name" prop="lastname">
          <Input v-model="member.last_name" placeholder="Enter your Last name"></Input>
        </FormItem>

        <!-- Phone -->
        <FormItem label="Phone" prop="phone">
          <Input
            v-model="member.phone"
            placeholder="Enter your Phone Number"
            maxlength="12"
          ></Input>
        </FormItem>

        <!-- Age -->
        <FormItem label="Age" prop="age">
          <Input
            v-model="member.age"
            placeholder="Enter your name"
            maxlength="3"
            minlength="1"
            type="number"
          ></Input>
        </FormItem>

        <!-- Address -->
        <FormItem label="Address" prop="name">
          <Input v-model="member.address" placeholder="Enter your name"></Input>
        </FormItem>
      </Form>
      <!--  -->
    </Modal>
  </div>
</template>

<script>
import db from "@/db";

export default {
  name: "modaledit-component",
  data() {
    return {
      modal1: false,
      positionArray: this.index,
      member: {
        first_name: this.name,
        last_name: this.lastName,
        phone: this.phone,
        age: this.age,
        address: this.address,
        id: this.id,
        email: this.email
      },
      ruleValidate: {
        firstname: [{ required: true, message: "The Frist name cannot be empty", trigger: "blur" }],
        lastname: [{ required: true, message: "The Last name cannot be empty", trigger: "blur" }],
        phone: [{ required: true, message: "The Phone cannot be empty", trigger: "blur" }],
        age: [{ required: true, message: "The age cannot be empty", trigger: "blur" }]
      }
    };
  },
  props: {
    name: {
      type: String
    },
    lastName: {
      type: String
    },
    phone: {
      type: String
    },
    age: {},
    address: {
      type: String
    },
    id: {
      type: String
    },
    email: {
      type: String
    },
    index: {
      type: Number
    }
  },
  methods: {
    handleOK() {
      db.collection("users")
        .doc(this.member.id)
        .set(this.member)
        .then(() => {
          this.updateUsersStroe(this.positionArray, this.member);
          //  this.updateMembers(this.member.id);
          this.$Message.info("Clicked ok");
        })
        .catch(err => {
          this.$Message.info(`ERR : ${err}`);
        });
    },
    handleCancel() {
      this.$Message.info("Clicked cancel");
    },
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    async updateUsersStroe(index, newData) {
      this.$emit("updateCard");
      this.$store.dispatch("upDateUserStore", { index, newData });
    }
  }
};
</script>

<style lang="scss" scoped></style>
