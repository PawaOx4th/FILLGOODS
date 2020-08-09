<template>
  <div id="modalinsert-component">
    <Button type="info" @click="modal1 = true" class="btn">Create User</Button>
    <Modal v-model="modal1" title="" :footer-hide="footerHide">
      <!--  -->
      <br />
      <Form ref="member" :model="member" :rules="ruleValidate" label-position="left">
        <!-- Frist Name -->
        <FormItem label="Frist Name" prop="address">
          <Input v-model="member.first_name" placeholder="Enter your firstname" />
        </FormItem>

        <!-- Last Name -->
        <FormItem label="Frist Name" prop="address">
          <Input v-model="member.last_name" placeholder="Enter your lastname" />
        </FormItem>

        <!-- Email -->
        <FormItem label="E-mail" prop="mail">
          <Input v-model="member.mail" placeholder="Enter your e-mail" />
        </FormItem>

        <!-- Phone -->
        <FormItem label="Phone" prop="phone">
          <Input
            v-model="member.phone"
            maxlength="11"
            show-word-limit
            placeholder="Enter your Phone Number"
          />
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
        <FormItem label="Address" prop="address">
          <Input v-model="member.address" placeholder="Enter your address"></Input>
        </FormItem>

        <!-- EVENT -->
        <FormItem>
          <Button type="primary" @click="handleOK('member')">Create User</Button>
          <Button @click="handleCancel('member')" style="margin-left: 8px">Reset</Button>
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
    return {
      modal1: false,
      footerHide: true,
      member: {
        first_name: "",
        last_name: "",
        phone: "",
        age: 0,
        address: "",
        id: "",
        mail: ""
      },
      ruleValidate: {
        emty: [{ required: true, message: "The address cannot be empty", trigger: "blur" }],
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
      console.log(this.member.id);
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
